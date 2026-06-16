export const smartManufacturingShots = [
  {
    title: "液力自动变速器",
    subtitle: "首页展示",
    src: "/images/visual/smart-manufacturing/transmission-home.webp",
  },
  {
    title: "变速器结构说明",
    subtitle: "信息面板",
    src: "/images/visual/smart-manufacturing/transmission-detail.webp",
    carousel: [
      { type: "image" as const, src: "/images/visual/smart-manufacturing/transmission-detail.webp" },
      { type: "video" as const, src: "/images/visual/smart-manufacturing/transmission-home.mp4" },
    ],
  },
  {
    title: "工业机器人",
    subtitle: "首页展示",
    src: "/images/visual/smart-manufacturing/robot-home.webp",
  },
  {
    title: "机器人机构说明",
    subtitle: "教学子页面",
    src: "/images/visual/smart-manufacturing/robot-detail.webp",
  },
  {
    title: "注塑两板式模具",
    subtitle: "首页展示",
    src: "/images/visual/smart-manufacturing/molding-home.webp",
  },
  {
    title: "注塑模具装配",
    subtitle: "操作子页面",
    src: "/images/visual/smart-manufacturing/molding-detail.webp",
  },
] as const;
