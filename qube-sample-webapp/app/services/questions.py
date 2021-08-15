"""Questioon Service Module
"""
import json
from typing import List
from fastapi import APIRouter
from fastapi.encoders import jsonable_encoder
from fastapi.exceptions import HTTPException
from app.models.questions import Question, QuestionInDB
from app.db.connections import db
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse


router = APIRouter(prefix="/questions")

"""""""""""""""""""""QUESTION SERVICE API's"""""""""""""""""""""
@router.post("/", response_description="Insert Question", response_model=Question, status_code=201)
async def insert(record: Question):
    question =  await db.insert(record, "questions")
    return question

@router.get("/", response_description="Get all Questions", response_model=List[Question])
async def get():
    questions = await db.get_all("questions")
    if not questions:
        raise HTTPException(status_code=404, detail="No questions found")
    return questions

@router.get("/getByParams", response_description="Get Questions by params", response_model=List[Question])
async def get_by_value(key: str, value):
    questions = await db.get_by_value("questions", key, value)
    if not questions:
        raise HTTPException(status_code=404, detail="No Questions found")
    return questions

