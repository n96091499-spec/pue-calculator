#!/bin/bash

# Netlify 部署腳本
# 使用方法: ./deploy.sh

echo "🚀 開始部署到 Netlify..."

# 檢查是否已登入
if ! netlify status &> /dev/null; then
    echo "⚠️  尚未登入 Netlify，請先執行: netlify login"
    exit 1
fi

# 部署到生產環境
echo "📦 部署中..."
netlify deploy --prod --dir=.

if [ $? -eq 0 ]; then
    echo "✅ 部署成功！"
else
    echo "❌ 部署失敗"
    exit 1
fi
