
#ejecuta este comando en el directorio fmps91.github.io el script_windows.ps1
#ejecutar en el terminal de windows: ./script_windows.ps1


# Eliminar el archivo index.html
if (Test-Path "index.html") {
    Remove-Item "index.html" -Force
    Write-Host "Archivo index.html eliminado."
} else {
    Write-Host "index.html no existía."
}

# Lista de directorios a eliminar
$directorios = @("assets", "images", "librarys")

foreach ($dir in $directorios) {
    if (Test-Path $dir) {
        # -Recurse elimina todo lo que esté dentro de la carpeta
        Remove-Item $dir -Recurse -Force
        Write-Host "Directorio $dir eliminado."
    } else {
        Write-Host "El directorio $dir no existía."
    }
}

Write-Host "Proceso terminado."