#!/bin/bash
# ==========================================================================
# GÜRKAN ÇORUMLU PORTFOLIO - AUTOMATED DROPLET DEPLOYMENT SCRIPT
# Target OS: Ubuntu 24.04 LTS (IP: 165.232.82.185)
# Domain: gurkancorumlu.com
# ==========================================================================

# Colors for log formatting
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== 1. Güncellemeler ve Nginx/Git Kurulumu ===${NC}"
sudo apt update
sudo apt install -y nginx git certbot python3-certbot-nginx ufw

echo -e "${BLUE}=== 2. Proje Klasörünün Oluşturulması ve GitHub'dan Klonlama ===${NC}"
sudo mkdir -p /var/www/gurkancorumlu.com
# Clean if folder already exists
sudo rm -rf /var/www/gurkancorumlu.com/html
# Clone clean main branch
sudo git clone https://github.com/gurkan01/gurkancorumlu.git /var/www/gurkancorumlu.com/html

echo -e "${BLUE}=== 3. Nginx Sanal Sunucu Blok Yapılandırması (Server Block) ===${NC}"
sudo bash -c 'cat > /etc/nginx/sites-available/gurkancorumlu.com <<EOF
server {
    listen 80;
    server_name gurkancorumlu.com www.gurkancorumlu.com;
    root /var/www/gurkancorumlu.com/html;
    index index.html;

    location / {
        try_files \$uri \$uri/ =404;
    }
}
EOF'

echo -e "${BLUE}=== 4. Sitenin Aktifleştirilmesi ===${NC}"
sudo ln -sf /etc/nginx/sites-available/gurkancorumlu.com /etc/nginx/sites-enabled/
# Remove Nginx default index configuration
sudo rm -f /etc/nginx/sites-enabled/default

echo -e "${BLUE}=== 5. Dosya İzinlerinin Ayarlanması ===${NC}"
sudo chown -R www-data:www-data /var/www/gurkancorumlu.com
sudo chmod -R 755 /var/www/gurkancorumlu.com

echo -e "${BLUE}=== 6. Güvenlik Duvarı (UFW) Nginx İzinleri ===${NC}"
sudo ufw allow 'Nginx Full'

echo -e "${BLUE}=== 7. Nginx Test ve Restart ===${NC}"
if sudo nginx -t; then
    echo -e "${GREEN}Nginx yapılandırması başarılı. Sunucu yeniden başlatılıyor...${NC}"
    sudo systemctl restart nginx
else
    echo -e "${RED}Nginx yapılandırma hatası! Lütfen ayarları kontrol edin.${NC}"
    exit 1
fi

echo -e "${BLUE}=== 8. SSL Sertifikası (HTTPS) Kurulumu - Let's Encrypt ===${NC}"
echo -e "${GREEN}Dikkat: SSL sertifikasının başarıyla kurulabilmesi için alan adınızın (gurkancorumlu.com) A kaydının 165.232.82.185 IP adresine yönlendirilmiş olması gerekir.${NC}"
sudo certbot --nginx -d gurkancorumlu.com -d www.gurkancorumlu.com --non-interactive --agree-tos --email gcorum01@gmail.com

echo -e "${GREEN}=== KURULUM TAMAMLANDI! ===${NC}"
echo -e "Web sitenizi ziyaret edebilirsiniz: ${BLUE}https://gurkancorumlu.com${NC}"
