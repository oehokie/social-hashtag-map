FROM python:2.7

ADD requirements.txt /app/requirements.txt
WORKDIR /app/
RUN pip install -r requirements.txt
ENV C_FORCE_ROOT 1