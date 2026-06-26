$repoPath  = "D:\Claudecode"
$watchPath = [System.IO.File]::ReadAllText("D:\Claudecode\watchpath.txt", [System.Text.Encoding]::UTF8).Trim()

function Pull-Changes {
    Set-Location $repoPath
    $result = git pull 2>&1
    if ($result -match "Already up to date") {
        Write-Host "Already up to date." -ForegroundColor DarkGray
    } else {
        Write-Host "Pulled: $result" -ForegroundColor Cyan
    }
}

function Push-Changes {
    Set-Location $repoPath
    git add "board exam/**/*.md"
    git add "board exam/*.md"
    git add "board exam/**/images/*"
    git add "docs/**/*.md"
    git add "docs/*.md"
    $staged = git diff --cached --name-only
    if ($staged) {
        git commit -m "Auto: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
        git push
        Write-Host "Pushed!" -ForegroundColor Green
    } else {
        Write-Host "No changes." -ForegroundColor DarkGray
    }
}

Write-Host "Watching... (Ctrl+C to stop)" -ForegroundColor Cyan
Pull-Changes
Push-Changes

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $watchPath
$watcher.Filter = "*"
$watcher.IncludeSubdirectories = $true

$lastPull = Get-Date

while ($true) {
    $change = $watcher.WaitForChanged([System.IO.WatcherChangeTypes]::All, 30000)

    if ((Get-Date) - $lastPull -gt [TimeSpan]::FromMinutes(5)) {
        Pull-Changes
        $lastPull = Get-Date
    }

    if (-not $change.TimedOut) {
        Write-Host "Change: $($change.Name)" -ForegroundColor Yellow
        Start-Sleep -Seconds 2
        Pull-Changes
        Push-Changes
        $lastPull = Get-Date
    }
}
