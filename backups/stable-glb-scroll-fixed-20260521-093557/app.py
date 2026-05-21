import os
from typing import Any

import httpx
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field


STACKAI_API_URL = "https://api.stackai.com/inference/v0/run/b3d86049-9974-41b0-a978-c0d804ff94e2/69fdc11ecb2d71d9ca288d24"


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=4000)
    user_id: str = ""


app = FastAPI(title="OpenCodie website")

app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("ALLOWED_ORIGINS", "*").split(","),
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


@app.post("/api/chat")
async def chat(request: ChatRequest) -> dict[str, Any]:
    token = os.getenv("STACKAI_API_KEY")
    if not token:
        raise HTTPException(status_code=500, detail="STACKAI_API_KEY is not configured")

    payload = {
        "user_id": request.user_id,
        "in-0": request.message,
    }
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
    }

    try:
        async with httpx.AsyncClient(timeout=45) as client:
            response = await client.post(STACKAI_API_URL, headers=headers, json=payload)
            response.raise_for_status()
    except httpx.HTTPStatusError as exc:
        raise HTTPException(
            status_code=exc.response.status_code,
            detail="StackAI returned an error",
        ) from exc
    except httpx.RequestError as exc:
        raise HTTPException(status_code=502, detail="Could not reach StackAI") from exc

    data = response.json()
    return {
        "answer": extract_answer(data),
        "raw": data,
    }


def extract_answer(data: Any) -> str:
    if isinstance(data, str):
        return data
    if isinstance(data, dict):
        for key in ("out-0", "output", "answer", "response", "text", "message"):
            value = data.get(key)
            if isinstance(value, str) and value.strip():
                return value
        for value in data.values():
            answer = extract_answer(value)
            if answer:
                return answer
    if isinstance(data, list):
        for item in data:
            answer = extract_answer(item)
            if answer:
                return answer
    return "I received a response, but could not read the answer format."


@app.get("/")
async def home() -> FileResponse:
    return FileResponse("index.html")


@app.get("/index.html")
async def index_page() -> FileResponse:
    return FileResponse("index.html")


@app.get("/docs.html")
async def docs_page() -> FileResponse:
    return FileResponse("docs.html")


@app.get("/legal.html")
async def legal_page() -> FileResponse:
    return FileResponse("legal.html")


@app.get("/robots.txt")
async def robots() -> FileResponse:
    return FileResponse("robots.txt")


@app.get("/sitemap.xml")
async def sitemap() -> FileResponse:
    return FileResponse("sitemap.xml")


@app.get("/favicon.ico")
async def favicon() -> FileResponse:
    return FileResponse("favicon.ico")


@app.get("/favicon.svg")
async def favicon_svg() -> FileResponse:
    return FileResponse("favicon.svg", media_type="image/svg+xml")


@app.get("/favicon-32x32.png")
async def favicon_32() -> FileResponse:
    return FileResponse("favicon-32x32.png")


@app.get("/favicon-16x16.png")
async def favicon_16() -> FileResponse:
    return FileResponse("favicon-16x16.png")


@app.get("/apple-touch-icon.png")
async def apple_touch_icon() -> FileResponse:
    return FileResponse("apple-touch-icon.png")


@app.get("/safari-pinned-tab.svg")
async def safari_pinned_tab() -> FileResponse:
    return FileResponse("safari-pinned-tab.svg")


app.mount("/css", StaticFiles(directory="css"), name="css")
app.mount("/js", StaticFiles(directory="js"), name="js")
app.mount("/images", StaticFiles(directory="images"), name="images")
app.mount("/video", StaticFiles(directory="video"), name="video")
