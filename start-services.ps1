# Start all microservices for local development
# Run from the project root: .\start-services.ps1

Write-Host "Starting LUXE Microservices..." -ForegroundColor Cyan
Write-Host ""

# Start Auth Service
Write-Host "Starting Auth Service (port 5001)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd services/auth; npm run dev"

Start-Sleep -Seconds 2

# Start Product Service
Write-Host "Starting Product Service (port 5002)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd services/products; npm run dev"

Start-Sleep -Seconds 2

# Start Order Service
Write-Host "Starting Order Service (port 5003)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd services/orders; npm run dev"

Start-Sleep -Seconds 2

# Start API Gateway
Write-Host "Starting API Gateway (port 5000)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd services/gateway; npm run dev"

Write-Host ""
Write-Host "All services starting in separate windows!" -ForegroundColor Green
Write-Host ""
Write-Host "   Gateway:  http://localhost:5000" -ForegroundColor White
Write-Host "   Auth:     http://localhost:5001" -ForegroundColor White
Write-Host "   Products: http://localhost:5002" -ForegroundColor White
Write-Host "   Orders:   http://localhost:5003" -ForegroundColor White
Write-Host ""
Write-Host "Frontend still connects to http://localhost:5000 (Gateway)" -ForegroundColor Gray
