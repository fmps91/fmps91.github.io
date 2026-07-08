#!/bin/bash

#ejecuta este comando en el directorio fmps91.github.io: chmod +x script_mac_ubuntu.sh
# 2 formas de ejecutar el bash
# una asi en el terminal: ./script_mac_ubuntu.sh
# otra es asi en el terminal: bash script_mac_ubuntu.sh

# Eliminar el archivo index.html si existe
if [ -f "index.html" ]; then
    rm "index.html"
    echo "Archivo index.html eliminado."
else
    echo "index.html no existía."
fi

# Eliminar los directorios y todo su contenido
for dir in assets images librarys; do
    if [ -d "$dir" ]; then
        rm -rf "$dir"
        echo "Directorio $dir eliminado."
    else
        echo "El directorio $dir no existía."
    fi
done

echo "Proceso terminado."