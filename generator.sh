cp -R ./base $MODULE

for f in $(find ./$MODULE -name '*.txt'); do 
  basename "$f"
  dir="$(dirname -- $f)"
  b="$(basename -- $f)"

  name=$(echo "$b" | cut -f 1 -d '.')  

  OLD="$dir/$b"
  if [[ $name == "base" ]]; then
    NEW="$dir/$MODULE.go"
  else
    NEW="$dir/$name.go"
  fi
  
  mv $OLD $NEW
  sed -i '' -e "s/base/${MODULE}/g" $NEW
  sed -i '' -e "s/models.Base/models.${MODEL}/g" $NEW
  echo "----"
done