import uvicorn
import logging.config
import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.services import questions
from app.db.connections import db

"""""""""""""""""""""""""""Setting Application Context"""""""""""""""""""""""""""""""""""
app = FastAPI()
global logger
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def start_up():
    logger.info("Starting Application: Qube")
    await db.init_dbi()

@app.on_event("shutdown")
async def shut_down():
    logger.info("Closing Application: Qube")
    await db.close_dbi()

"""""""""""""""""""""""""""Enabled CORS for REACT Application"""""""""""""""""""""""""""
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
"""""""""""""""""""""ROUTER CONFIGURATION"""""""""""""""""""""
app.include_router(questions.router)


"""""""""""""""""""""""""""ROOT PAGE"""""""""""""""""""""""""""""""""""
@app.get("/")
def home():
    return "Home Page"

"""""""""""""""""""""""""""Main method call"""""""""""""""""""""""""""
if __name__ == "__main__":
    logging.config.fileConfig(fname='logger.ini')
    uvicorn.run(app, host="0.0.0.0", port=5000)