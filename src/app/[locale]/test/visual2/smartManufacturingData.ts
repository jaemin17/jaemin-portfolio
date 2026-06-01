export const smartManufacturingShots = [
  {
    title: "液力自动变速器",
    subtitle: "首页展示",
    src: "/images/visual/smart-manufacturing/transmission-home.png",
  },
  {
    title: "变速器结构说明",
    subtitle: "信息面板",
    src: "/images/visual/smart-manufacturing/transmission-detail.png",
    carousel: [
      { type: "image" as const, src: "/images/visual/smart-manufacturing/transmission-detail.png" },
      { type: "video" as const, src: "/images/visual/smart-manufacturing/transmission-home.mp4" },
    ],
  },
  {
    title: "变速器爆炸演示",
    subtitle: "交互状态",
    src: "/images/visual/smart-manufacturing/transmission-exploded.png",
  },
  {
    title: "工业机器人",
    subtitle: "首页展示",
    src: "/images/visual/smart-manufacturing/robot-home.png",
  },
  {
    title: "机器人机构说明",
    subtitle: "教学子页面",
    src: "/images/visual/smart-manufacturing/robot-detail.png",
  },
  {
    title: "注塑两板式模具",
    subtitle: "首页展示",
    src: "/images/visual/smart-manufacturing/molding-home.png",
  },
  {
    title: "注塑模具装配",
    subtitle: "操作子页面",
    src: "/images/visual/smart-manufacturing/molding-detail.png",
  },
] as const;
