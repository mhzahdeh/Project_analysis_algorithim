from fastapi import FastAPI
from Frontend import codeAPI

app = FastAPI()
app.include_router(analytics.router)

@app.get("/")
def read_root():
    return {"message": "Restaurant Analytics API"}