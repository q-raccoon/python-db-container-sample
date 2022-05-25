# from typing import List
# from fastapi.encoders import jsonable_encoder
# from pydantic import BaseModel
# from starlette.responses import JSONResponse


# def create_aliased_response(model: BaseModel) -> JSONResponse:
#   return JSONResponse(content=jsonable_encoder(model, by_alias=True))

# # async def get_movies_with_filters(
# #   conn: AsyncIOMotorClient, 
# #   filters: MovieFilterParams
# # ) -> List[MovieInDB]:
# #   movies: List[MovieInDB] = []
# #   base_query = {}

# #   if filters.title:
# #       movies = filters.title.replace(", ", ",").split(',')
# #       base_query["Movie"] = { "$in": movies }


# #   rows = conn[database_name][movie_collection].find(base_query,
# #                                         limit=filters.limit,
# #                                         skip=filters.offset)
# #   async for row in rows:
# #       movies.append(
# #           MovieInDB(
# #               **row,
# #               created_at=ObjectId(row["_id"]).generation_time,
# #           )
# #       )
# #   return movies