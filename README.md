# Nautica Calderon

Hacer un build usando docker y dejarlo en una carpeta destino:

```bash
cd NauticaCalderon/
git pull
docker build -t nautica .
docker run -it --name nautica --rm nautica sh
```

...en otro terminal

```bash
docker cp nautica:/app/build /var/www/nautica-new
```
