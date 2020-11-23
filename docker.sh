# postgresql
docker run --name postgresql-db -e POSTGRES_PASSWORD=123456 -d postgres -p 5432:5432

# pgadmin
docker run -p 5433:80 \
    -e 'PGADMIN_DEFAULT_EMAIL=zxuqian@test.local' \
    -e 'PGADMIN_DEFAULT_PASSWORD=123456' \
    -d dpage/pgadmin4 \
    --name pgadmin4