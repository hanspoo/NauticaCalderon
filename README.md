# Nautica Calderon

Hacer un build usando docker y dejarlo en una carpeta destino:

```bash
cd NauticaCalderon/
git pull
docker build -t nautica .
docker run --rm -v /var/www/nauticacalderon:/app/build nautica
```
