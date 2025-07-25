# Nautica Calderon

Hacer un build usando docker y dejarlo en una carpeta destino:

```
cd NauticaCalderon/
git pull
docker build -t nautica .
docker run -it --name nautica --rm nautica sh
```

...en otro terminal

```
docker cp nautica:/app/build /var/www/nautica-new
```
