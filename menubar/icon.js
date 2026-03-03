const { nativeImage } = require('electron');

// 22x22 macOS template tray icon — blob silhouette
function createTrayIcon() {
  // Base64-encoded 22x22 PNG template image (black blob on transparent)
  const base64 =
    'data:image/png;base64,' +
    'iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAQElEQVR4nO3MwREA' +
    'IAgDQfpvGjuQJJgH6s3cdyNuKzcfB2UcRSmcRWHcAqtoiX94MNzBy2ywglNZUBRv' +
    'ZUEfawHKXdgoc3lltQAAAABJRU5ErkJggg==';

  const icon = nativeImage.createFromDataURL(base64);
  icon.setTemplateImage(true);
  return icon;
}

module.exports = { createTrayIcon };
