# Solución al Error de Certbot

## 🔴 Problema

Al ejecutar `certbot`, obtienes estos errores:

1. **Advertencias sobre directivas obsoletas:**
   ```
   the "http2_max_field_size" directive is obsolete
   the "http2_max_header_size" directive is obsolete
   ```

2. **Error crítico:**
   ```
   cannot load certificate "/etc/letsencrypt/live/tu-dominio.com/fullchain.pem"
   ```

## ✅ Solución Paso a Paso

### Paso 1: Comentar la sección HTTPS en tu configuración

Tu archivo de configuración (`/etc/nginx/sites-enabled/web-devIC`) tiene una sección HTTPS activa pero sin certificados válidos. Debes comentarla temporalmente.

**En tu servidor, ejecuta:**

```bash
sudo nano /etc/nginx/sites-enabled/web-devIC
```

**Busca la sección que comienza con:**
```nginx
server {
    listen 443 ssl http2;
    ...
}
```

**Comenta toda esa sección** agregando `#` al inicio de cada línea, o simplemente elimina temporalmente esa sección completa.

**También elimina o comenta estas líneas obsoletas:**
```nginx
# Eliminar estas líneas (son obsoletas):
http2_max_field_size 16k;
http2_max_header_size 32k;
```

### Paso 2: Verificar que la configuración es válida

```bash
sudo nginx -t
```

Deberías ver:
```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

Si hay errores, corrígelos antes de continuar.

### Paso 3: Recargar Nginx

```bash
sudo systemctl reload nginx
```

### Paso 4: Instalar Certbot

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx -y
```

### Paso 5: Obtener certificado SSL

**IMPORTANTE:** Asegúrate de que:
- Tu dominio apunta correctamente a la IP de tu servidor
- El puerto 80 está abierto en el firewall de AWS Lightsail
- Nginx está funcionando correctamente en HTTP

**Luego ejecuta:**

```bash
sudo certbot --nginx -d dev.interconnecta.com
```

**O si tienes www también:**

```bash
sudo certbot --nginx -d dev.interconnecta.com -d www.dev.interconnecta.com
```

Certbot automáticamente:
- Generará los certificados
- Configurará Nginx para HTTPS
- Habilitará HTTP/2
- Configurará redirección de HTTP a HTTPS

### Paso 6: Verificar que todo funciona

```bash
# Verificar configuración
sudo nginx -t

# Verificar que el certificado se renovará automáticamente
sudo certbot renew --dry-run

# Probar HTTPS
curl -I https://dev.interconnecta.com
```

## 📝 Configuración Correcta para HTTPS (Después de Certbot)

Una vez que certbot instale los certificados, tu configuración debería verse así:

```nginx
# Servidor HTTP - Redirige a HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name dev.interconnecta.com;
    
    # Redirigir todo a HTTPS
    return 301 https://$server_name$request_uri;
}

# Servidor HTTPS
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name dev.interconnecta.com;
    
    root /var/www/web-devIC;
    index index.html index.htm;
    
    # Certificados (certbot los configura automáticamente)
    ssl_certificate /etc/letsencrypt/live/dev.interconnecta.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/dev.interconnecta.com/privkey.pem;
    
    # Configuración SSL optimizada
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384';
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # NO uses estas directivas (son obsoletas):
    # http2_max_field_size 16k;  ❌
    # http2_max_header_size 32k; ❌
    
    # En su lugar, usa (ya configurado en http {}):
    # large_client_header_buffers 4 4k; ✅
    
    # ... resto de la configuración (gzip, caché, etc.)
}
```

## 🔧 Si Certbot No Funciona

### Verificar que el dominio apunta al servidor

```bash
# Desde tu computadora local
nslookup dev.interconnecta.com
# o
dig dev.interconnecta.com
```

Debe mostrar la IP de tu servidor AWS Lightsail.

### Verificar firewall de AWS Lightsail

En la consola de AWS Lightsail:
1. Ve a tu instancia
2. Ve a la pestaña "Networking"
3. Asegúrate de que el puerto 80 (HTTP) esté abierto
4. Asegúrate de que el puerto 443 (HTTPS) esté abierto

### Verificar que Nginx está escuchando en el puerto 80

```bash
sudo netstat -tlnp | grep :80
# o
sudo ss -tlnp | grep :80
```

Deberías ver que nginx está escuchando.

### Ver logs de Nginx

```bash
sudo tail -f /var/log/nginx/error.log
```

## 🚨 Errores Comunes

### Error: "Failed to connect to ACME server"

**Causa:** Problemas de conectividad o firewall bloqueando.

**Solución:**
- Verifica que el puerto 80 esté abierto
- Verifica conectividad: `curl -I http://dev.interconnecta.com`

### Error: "Domain not pointing to this server"

**Causa:** El DNS no está configurado correctamente.

**Solución:**
- Verifica que el registro A de tu dominio apunte a la IP del servidor
- Espera a que el DNS se propague (puede tardar hasta 48 horas)

### Error: "Port 80 is already in use"

**Causa:** Otro servicio está usando el puerto 80.

**Solución:**
```bash
# Ver qué está usando el puerto 80
sudo lsof -i :80
# Detener el servicio o cambiar la configuración
```

## ✅ Checklist Final

- [ ] Sección HTTPS comentada o eliminada temporalmente
- [ ] Directivas obsoletas (`http2_max_field_size`, `http2_max_header_size`) eliminadas
- [ ] `sudo nginx -t` pasa sin errores
- [ ] Nginx recargado correctamente
- [ ] Certbot instalado
- [ ] Dominio apunta correctamente al servidor
- [ ] Puerto 80 abierto en firewall
- [ ] Certbot ejecutado exitosamente
- [ ] HTTPS funcionando
- [ ] HTTP redirige a HTTPS

## 📚 Recursos Adicionales

- [Documentación de Certbot](https://certbot.eff.org/)
- [Nginx SSL Configuration](https://nginx.org/en/docs/http/configuring_https_servers.html)

---

**Nota:** Después de que certbot configure todo correctamente, puedes usar la configuración optimizada de `nginx-optimized.conf` como referencia, pero certbot ya habrá configurado lo esencial.


