<#
.SYNOPSIS
    OutputEvolution Chrome Extension Build Script
    
.DESCRIPTION
    Creates a production-ready ZIP file for Chrome Web Store submission.
    Excludes development files and includes only necessary extension files.
    
.NOTES
    Author: OutputEvolution
    Version: 1.0.0
#>

# Configuration
$ExtensionName = "OutputEvolution"
$OutputFile = "$ExtensionName.zip"
$TempDir = ".\build_temp"

# Required extension files
$RequiredFiles = @(
    "manifest.json"
)

$RequiredFolders = @(
    "icons",
    "popup",
    "scripts",
    "styles"
)

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  OutputEvolution Build Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Clean up old build
Write-Host "[1/5] Cleaning up old build files..." -ForegroundColor Yellow
if (Test-Path $OutputFile) {
    Remove-Item $OutputFile -Force
    Write-Host "      Removed old ZIP file" -ForegroundColor Gray
}

if (Test-Path $TempDir) {
    Remove-Item $TempDir -Recurse -Force
    Write-Host "      Removed old temp directory" -ForegroundColor Gray
}

# Step 2: Create temp directory
Write-Host "[2/5] Creating build directory..." -ForegroundColor Yellow
New-Item -ItemType Directory -Path $TempDir | Out-Null

# Step 3: Copy required files
Write-Host "[3/5] Copying extension files..." -ForegroundColor Yellow

foreach ($file in $RequiredFiles) {
    if (Test-Path $file) {
        Copy-Item $file -Destination $TempDir
        Write-Host "      + $file" -ForegroundColor Gray
    } else {
        Write-Host "      ! Missing: $file" -ForegroundColor Red
    }
}

foreach ($folder in $RequiredFolders) {
    if (Test-Path $folder) {
        Copy-Item $folder -Destination $TempDir -Recurse
        Write-Host "      + $folder/" -ForegroundColor Gray
    } else {
        Write-Host "      ! Missing: $folder/" -ForegroundColor Red
    }
}

# Step 4: Clean up unnecessary files from build
Write-Host "[4/5] Removing development files..." -ForegroundColor Yellow

# Remove SVG files (only PNG needed for extension)
$svgFiles = Get-ChildItem "$TempDir\icons\*.svg" -ErrorAction SilentlyContinue
if ($svgFiles) {
    $svgFiles | Remove-Item -Force
    Write-Host "      - Removed SVG files from icons/" -ForegroundColor Gray
}

# Step 5: Create ZIP archive
Write-Host "[5/5] Creating ZIP archive..." -ForegroundColor Yellow
Compress-Archive -Path "$TempDir\*" -DestinationPath $OutputFile -Force

# Cleanup temp directory
Remove-Item $TempDir -Recurse -Force

# Calculate and display results
$ZipSize = (Get-Item $OutputFile).Length / 1KB
$ZipSizeMB = (Get-Item $OutputFile).Length / 1MB

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  Build Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "  Output: $OutputFile" -ForegroundColor White
Write-Host "  Size:   $([math]::Round($ZipSize, 2)) KB ($([math]::Round($ZipSizeMB, 3)) MB)" -ForegroundColor White
Write-Host ""
Write-Host "  Next Steps:" -ForegroundColor Yellow
Write-Host "  1. Go to: https://chrome.google.com/webstore/devconsole/" -ForegroundColor Cyan
Write-Host "  2. Click 'New Item' or update existing" -ForegroundColor Cyan
Write-Host "  3. Upload $OutputFile" -ForegroundColor Cyan
Write-Host ""
