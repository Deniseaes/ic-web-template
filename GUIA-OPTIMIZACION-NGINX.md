# Guía de Optimización de Nginx para AWS Lightsail

Esta guía te ayudará a mejorar significativamente las métricas de velocidad de carga de tu sitio web en AWS Lightsail usando Nginx.

## 📋 Índice
1. [Instalación y Configuración Básica](#instalación)
2. [Optimizaciones de Nginx](#optimizaciones)
3. [Optimizaciones Adicionales del Sistema](#optimizaciones-sistema)
4. [Verificación y Monitoreo](#verificación)
5. [Troubleshooting](#troubleshooting)

---

## 🔧 Instalación y Configuración Básica

### 1. Instalar Nginx en Ubuntu

```bash
sudo apt update
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 2. Verificar versión de Nginx

```bash
nginx -v
```

**Recomendación:** Usa Nginx 1.18+ para mejor rendimiento.

### 3. Copiar tu sitio web al servidor

```bash
# Crear directorio web
sudo mkdir -p /var/www/html

# Subir tus archivos (usando SCP, SFTP, o git)
# Ejemplo con SCP desde tu máquina local:
# scp -r * usuario@tu-servidor:/var/www/html/

# Asegurar permisos correctos
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html
```

### 4. Aplicar configuración optimizada

```bash
# Hacer backup de la configuración actual
sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/default.backup

# Editar la configuración
sudo nano /etc/nginx/sites-available/default
```

Copia el contenido de `nginx-optimized.conf` y reemplaza:
- `tu-dominio.com` con tu dominio real
- Ajusta la ruta `root` si es diferente a `/var/www/html`

### 5. Probar y recargar configuración

```bash
# Probar configuración
sudo nginx -t

# Si todo está bien, recargar
sudo systemctl reload nginx
```

---

## ⚡ Optimizaciones de Nginx

### 1. Compresión Gzip (Ya incluida en la configuración)

La compresión Gzip reduce el tamaño de los archivos CSS, JS, HTML y otros archivos de texto en un 60-80%.

**Verificar que funciona:**
```bash
curl -H "Accept-Encoding: gzip" -I http://tu-dominio.com/assets/css/main.css


curl -H "Accept-Encoding: gzip" -I http://dev.interconnecta.com/assets/css/main.css
```

Deberías ver: `Content-Encoding: gzip`

### 2. Compresión Brotli (Opcional, mejor que Gzip)

Brotli ofrece mejor compresión que Gzip (10-20% más eficiente).

```bash
# Instalar módulo Brotli
sudo apt install nginx-module-brotli -y

# Editar /etc/nginx/nginx.conf y agregar al inicio:
# load_module modules/ngx_http_brotli_filter_module.so;
# load_module modules/ngx_http_brotli_static_module.so;

# Descomentar las líneas de Brotli en nginx-optimized.conf
```

### 3. HTTP/2 (Requiere HTTPS)

HTTP/2 permite multiplexación, lo que mejora significativamente la carga de múltiples recursos.

**Para habilitar:**
1. Obtén un certificado SSL (Let's Encrypt es gratuito)
2. Descomenta la sección HTTPS en `nginx-optimized.conf`
3. Cambia `listen 443 ssl;` a `listen 443 ssl http2;`

**Instalar Let's Encrypt:**

⚠️ **IMPORTANTE:** Antes de ejecutar certbot, asegúrate de que la sección HTTPS en tu configuración de Nginx esté **COMENTADA** o **ELIMINADA**. Certbot necesita que Nginx funcione solo en HTTP primero.

```bash
# 1. Verificar que la configuración HTTPS está comentada
sudo nano /etc/nginx/sites-enabled/tu-archivo-config

# 2. Verificar que Nginx funciona
sudo nginx -t
sudo systemctl reload nginx

# 3. Instalar certbot
sudo apt install certbot python3-certbot-nginx -y

# 4. Obtener certificado (certbot configurará HTTPS automáticamente)
sudo certbot --nginx -d tu-dominio.com -d www.tu-dominio.com
```

**Si encuentras errores con certbot**, consulta `SOLUCION-ERROR-CERTBOT.md` para soluciones detalladas.

### 4. Caché de Archivos Estáticos

La configuración ya incluye caché agresiva para:
- Imágenes: 1 año
- CSS/JS: 1 año
- Fuentes: 1 año
- HTML: 1 hora

**Verificar headers de caché:**
```bash
curl -I http://tu-dominio.com/assets/css/main.css


curl -I http://dev.interconnecta.com/assets/css/main.css
```

Deberías ver: `Cache-Control: public, immutable`

---

## 🚀 Optimizaciones Adicionales del Sistema

### 1. Optimizar límites del sistema

Editar `/etc/security/limits.conf`:
```bash
sudo nano /etc/security/limits.conf
```

Agregar al final:
```
www-data soft nofile 65535
www-data hard nofile 65535
```

### 2. Optimizar parámetros del kernel

Editar `/etc/sysctl.conf`:
```bash
sudo nano /etc/sysctl.conf
```

Agregar:
```
# Optimizaciones de red
net.core.somaxconn = 65535
net.core.netdev_max_backlog = 65535
net.ipv4.tcp_max_syn_backlog = 65535
net.ipv4.tcp_fin_timeout = 10
net.ipv4.tcp_keepalive_time = 300
net.ipv4.tcp_keepalive_probes = 5
net.ipv4.tcp_keepalive_intvl = 15
net.ipv4.tcp_tw_reuse = 1
net.ipv4.ip_local_port_range = 1024 65535
```

Aplicar cambios:
```bash
sudo sysctl -p
```

### 3. Optimizar configuración de Nginx (nginx.conf)

Editar `/etc/nginx/nginx.conf`:
```bash
sudo nano /etc/nginx/nginx.conf
```

Ajustar estos valores según tu servidor:

```nginx
# Número de workers (generalmente = número de CPUs)
worker_processes auto;

# Conexiones por worker
events {
    worker_connections 2048;
    use epoll;
    multi_accept on;
}

http {
    # Buffer sizes
    client_body_buffer_size 128k;
    client_header_buffer_size 1k;
    large_client_header_buffers 4 4k;
    
    # Timeouts
    client_body_timeout 12;
    client_header_timeout 12;
    keepalive_timeout 15;
    send_timeout 10;
    
    # Sendfile (más eficiente para archivos estáticos)
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    
    # Ocultar versión de Nginx (seguridad)
    server_tokens off;
}
```

### 4. Precompresión de archivos estáticos (Opcional)

Para archivos que no cambian, puedes precomprimirlos:

```bash
# Instalar gzip
sudo apt install gzip -y

# Precomprimir archivos CSS grandes
cd /var/www/html/assets/css
sudo gzip -k main.css
sudo gzip -k bootstrap.min.css
# etc...

# Habilitar gzip_static en nginx
# (ya está comentado en la configuración)
```

---

## 📊 Verificación y Monitoreo

### 1. Herramientas de prueba de velocidad

- **Google PageSpeed Insights:** https://pagespeed.web.dev/
- **GTmetrix:** https://gtmetrix.com/
- **WebPageTest:** https://www.webpagetest.org/
- **Lighthouse:** Herramienta de Chrome DevTools

### 2. Verificar compresión

```bash
# Verificar Gzip
curl -H "Accept-Encoding: gzip" -I http://tu-dominio.com/assets/css/main.css | grep -i "content-encoding"

# Verificar tamaño comprimido vs sin comprimir
curl -H "Accept-Encoding: gzip" http://tu-dominio.com/assets/css/main.css | wc -c
curl http://tu-dominio.com/assets/css/main.css | wc -c
```

### 3. Verificar caché

```bash
curl -I http://tu-dominio.com/assets/css/main.css | grep -i "cache-control"
```

### 4. Monitorear rendimiento de Nginx

```bash
# Ver estadísticas en tiempo real
sudo tail -f /var/log/nginx/access.log

# Ver errores
sudo tail -f /var/log/nginx/error.log

# Ver uso de recursos
htop
# o
top
```

### 5. Verificar HTTP/2 (si está habilitado)

```bash
curl -I --http2 https://tu-dominio.com
```

---

## 🔍 Optimizaciones Específicas para tu Proyecto

### 1. Minificar archivos CSS grandes

Tu `main.css` tiene 30,890 líneas. Considera:

```bash
# Instalar herramientas de minificación
sudo apt install nodejs npm -y
npm install -g clean-css-cli

# Minificar CSS
cleancss -o main.min.css main.css
```

### 2. Combinar archivos CSS cuando sea posible

En lugar de múltiples `<link>` tags, considera combinar archivos CSS críticos.

### 3. Lazy loading de imágenes

Asegúrate de que las imágenes usen `loading="lazy"`:
```html
<img src="imagen.jpg" loading="lazy" alt="...">
```

### 4. Optimizar imágenes

```bash
# Instalar herramientas de optimización
sudo apt install jpegoptim optipng webp -y

# Optimizar imágenes (ejemplo)
jpegoptim --max=85 --strip-all *.jpg
optipng -o7 *.png
```

### 5. Usar CDN para assets estáticos

Considera usar CloudFront (AWS) o Cloudflare para servir assets estáticos desde ubicaciones más cercanas a tus usuarios.

---

## 🛠️ Troubleshooting

### Problema: Nginx no inicia después de cambios

```bash
# Verificar sintaxis
sudo nginx -t

# Ver logs de error
sudo tail -50 /var/log/nginx/error.log

# Revertir cambios
sudo cp /etc/nginx/sites-available/default.backup /etc/nginx/sites-available/default
sudo systemctl reload nginx
```

### Problema: Compresión no funciona

```bash
# Verificar que gzip está habilitado
sudo nginx -T | grep gzip

# Verificar headers de respuesta
curl -H "Accept-Encoding: gzip" -I http://tu-dominio.com
```

### Problema: Caché no funciona

```bash
# Verificar headers
curl -I http://tu-dominio.com/assets/css/main.css

# Limpiar caché del navegador y probar de nuevo
```

### Problema: Alto uso de CPU/Memoria

```bash
# Ver procesos de Nginx
ps aux | grep nginx

# Ajustar worker_processes en nginx.conf
# Reducir worker_connections si es necesario
```

---

## 📈 Métricas Esperadas

Después de aplicar estas optimizaciones, deberías ver mejoras en:

- **First Contentful Paint (FCP):** 30-50% más rápido
- **Largest Contentful Paint (LCP):** 40-60% más rápido
- **Time to Interactive (TTI):** 30-50% más rápido
- **Total Blocking Time (TBT):** Reducción significativa
- **Cumulative Layout Shift (CLS):** Sin cambios (depende del código)

**Objetivos recomendados:**
- FCP: < 1.8s
- LCP: < 2.5s
- TTI: < 3.8s
- TBT: < 200ms

---

## 🔐 Seguridad Adicional

### 1. Rate Limiting

Agregar a la configuración de Nginx:

```nginx
# Limitar requests por IP
limit_req_zone $binary_remote_addr zone=one:10m rate=10r/s;

server {
    # ...
    limit_req zone=one burst=20 nodelay;
}
```

### 2. Firewall (UFW)

```bash
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

---

## 📝 Checklist de Implementación

- [ ] Instalar Nginx
- [ ] Copiar archivos del sitio web
- [ ] Aplicar configuración optimizada
- [ ] Habilitar compresión Gzip
- [ ] Configurar caché de archivos estáticos
- [ ] Instalar y configurar SSL (Let's Encrypt)
- [ ] Habilitar HTTP/2
- [ ] Optimizar parámetros del sistema
- [ ] Verificar con herramientas de testing
- [ ] Monitorear logs y rendimiento
- [ ] Optimizar imágenes
- [ ] Considerar CDN para assets estáticos

---

## 📚 Recursos Adicionales

- [Nginx Performance Tuning](https://www.nginx.com/blog/tuning-nginx/)
- [Google Web Fundamentals - Performance](https://web.dev/performance/)
- [AWS Lightsail Documentation](https://docs.aws.amazon.com/lightsail/)

---

**Nota:** Siempre haz backup antes de hacer cambios importantes. Prueba en un entorno de desarrollo primero si es posible.

