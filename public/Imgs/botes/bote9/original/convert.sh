for img in *.jpeg; do
  convert "$img" -resize 800x600^ -gravity center -extent 800x600 -background black "resized/$img"
done

