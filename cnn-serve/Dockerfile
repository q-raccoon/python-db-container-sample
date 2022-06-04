FROM python:3.8

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt


COPY . /code/app

WORKDIR /code/app

CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "80"]

# pjt3591oo/cnn-serve-tutorial:0.2