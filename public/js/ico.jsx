// 定义不同尺寸的图标数组
const icons16x16 = [
  "/ico/1_16x16.png",
  "/ico/2_16x16.png",
  "/ico/3_16x16.png",
  "/ico/4_16x16.png",
  "/ico/5_16x16.png",
  "/ico/6_16x16.png",
  "/ico/7_16x16.png",
  "/ico/8_16x16.png",
  "/ico/9_16x16.png",
  "/ico/10_16x16.png",
  "/ico/11_16x16.png",
  "/ico/12_16x16.png",
  "/ico/13_16x16.png",
  "/ico/14_16x16.png",
  "/ico/15_16x16.png",
  "/ico/16_16x16.png",
];

const icons32x32 = [
  "/ico/1_32x32.png",
  "/ico/2_32x32.png",
  "/ico/3_32x32.png",
  "/ico/4_32x32.png",
  "/ico/5_32x32.png",
  "/ico/6_32x32.png",
  "/ico/7_32x32.png",
  "/ico/8_32x32.png",
  "/ico/9_32x32.png",
  "/ico/10_32x32.png",
  "/ico/11_32x32.png",
  "/ico/12_32x32.png",
  "/ico/13_32x32.png",
  "/ico/14_32x32.png",
  "/ico/15_32x32.png",
  "/ico/16_32x32.png",
];

const icons180x180 = [
  "/ico/1_180x180.png",
  "/ico/2_180x180.png",
  "/ico/3_180x180.png",
  "/ico/4_180x180.png",
  "/ico/5_180x180.png",
  "/ico/6_180x180.png",
  "/ico/7_180x180.png",
  "/ico/8_180x180.png",
  "/ico/9_180x180.png",
  "/ico/10_180x180.png",
  "/ico/11_180x180.png",
  "/ico/12_180x180.png",
  "/ico/13_180x180.png",
  "/ico/14_180x180.png",
  "/ico/15_180x180.png",
  "/ico/16_180x180.png",
];

// 随机选择图标
function randomIcon(icons) {
  return icons[Math.floor(Math.random() * icons.length)];
}

// 创建并插入favicon
function setFavicon(iconUrl, size) {
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = iconUrl;
  link.sizes = size; // 设置图标尺寸
  document.head.appendChild(link);
}

// 设置不同尺寸的favicon
setFavicon(randomIcon(icons16x16), "16x16");
setFavicon(randomIcon(icons32x32), "32x32");
setFavicon(randomIcon(icons180x180), "180x180");
