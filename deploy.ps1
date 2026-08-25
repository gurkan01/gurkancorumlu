# ==========================================================================
# GÜRKAN ÇORUMLU PORTFOLIO - AUTOMATED PUSH & DROPLET DEPLOYMENT SCRIPT
# Run this from your local PC terminal
# ==========================================================================

$ErrorActionPreference = "Stop"

# 1. GitHub Push
Write-Host "=== 1. Dosyalar GitHub'a Yükleniyor ===" -ForegroundColor Blue
git add .
git commit -m "Auto Deploy - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git push

# 2. Droplet Deployment
Write-Host "=== 2. Sunucuya Bağlanılıyor ve Güncelleniyor ===" -ForegroundColor Blue
ssh root@165.232.82.185 "git config --global --add safe.directory /var/www/gurkancorumlu && cd /var/www/gurkancorumlu && git fetch --all && git reset --hard origin/main && systemctl reload nginx"

Write-Host "=== CANLI YAYIN BAŞARIYLA GÜNCELLENDİ! ===" -ForegroundColor Green
Write-Host "Ziyaret edin: https://gurkancorumlu.com" -ForegroundColor Cyan
