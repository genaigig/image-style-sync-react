from fastapi import APIRouter
from typing import List
from models import RequestType, OEM, Plant, DataResponse

router = APIRouter()

# Sample data - this would typically come from a database
REQUEST_TYPES = [
    RequestType(id=1, name="Standard"),
    RequestType(id=2, name="Urgent"),
    RequestType(id=3, name="Maintenance"),
]

OEMS = [
    OEM(id=1, name="AIRCO CRYOGENICS"),
    OEM(id=2, name="Other Manufacturer"),
]

PLANTS = [
    Plant(id=1, name="Abu Dhabi"),
    Plant(id=2, name="Dubai"),
    Plant(id=3, name="Other Location"),
]

@router.get("/request-types", response_model=List[RequestType])
async def get_request_types():
    return REQUEST_TYPES

@router.get("/oems", response_model=List[OEM])
async def get_oems():
    return OEMS

@router.get("/plants", response_model=List[Plant])
async def get_plants():
    return PLANTS

@router.get("/data", response_model=DataResponse)
async def get_all_data():
    return DataResponse(
        request_types=REQUEST_TYPES,
        oems=OEMS,
        plants=PLANTS
    )
