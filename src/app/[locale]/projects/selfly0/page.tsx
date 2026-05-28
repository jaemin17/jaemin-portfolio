import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, type Locale } from "@/i18n/config";
import styles from "../[slug]/project.module.css";

const appDownloadUrl = "https://apps.apple.com/cn/app/selfly%E6%97%A5%E8%AE%B0/id6762545235";

type Selfly0PageProps = {
  params: Promise<{ locale: string }>;
};

function ChapterIntro({
  id,
  icon,
  title,
  children,
}: {
  id: string;
  icon: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className={styles.selfly0ChapterIntro} aria-labelledby={`selfly0-chapter-${id}`}>
      <div className={styles.selfly0ChapterInner}>
        <div className={styles.selfly0ChapterCopy}>
          <span className={styles.selfly0ChapterIcon} aria-hidden="true">
            {icon}
          </span>
          <div>
            <h2 id={`selfly0-chapter-${id}`}>{title}</h2>
            <p>{children}</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default async function Selfly0Page({ params }: Selfly0PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  return (
    <div className={`${styles.pagePlain} ${styles.selfly0Page}`} data-page="about2">
      <SiteHeader locale={locale} />
      <main className={styles.main}>
        <header className={`${styles.featuredHero} ${styles.projectOneHero}`}>
          <h1 className={styles.title}>
            <span className={styles.titleEn}>Selfly</span>：
            <span className={styles.titleZh}>
              让记录不再变成
              <span className={styles.strikeWord}>压力</span>
            </span>
          </h1>
          <p className={styles.subtitle}>帮助用户每日聚焦、自我记录与长期回看的 iOS 产品</p>
          <div className={styles.headerCta}>
            <div className={styles.appPreviewPlaceholder} aria-hidden="true" />
            <div className={styles.meta}>
              <span className={styles.metaItem}>2025–2026</span>
              <span className={styles.metaDot} aria-hidden="true">
                ·
              </span>
              <span className={styles.metaItem}>Solo Product Designer & iOS Developer</span>
            </div>
            <a
              className="buttonSticker buttonStickerOrange"
              href={appDownloadUrl}
              target="_blank"
              rel="noreferrer"
            >
              下载体验 App
            </a>
          </div>
        </header>
        <ChapterIntro id="positioning" icon="🧐" title="背景与定位">
          Selfly 的核心转变，是从一次性的自我探索工具，变成一个可长期使用的低压力记录系统。
        </ChapterIntro>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.caseText}>
            <h2>产品定位</h2>
            <div className={styles.selfly0Body}>
              <h3>从独立功能集合，到可持续自我记录系统</h3>
              <p className={styles.p}>
                Selfly 最初是一个帮助用户进行「自我探索」的工具，通过价值观、优势等练习，让人更清晰地认识自己。
                它来源于我的
                <strong className={styles.selfly0Emphasis}>个人真实需求</strong>。
              </p>
              <p className={styles.p}>
                <strong className={styles.selfly0DecisionLabel}>洞察</strong>&nbsp;&nbsp;&nbsp;在迭代过程中，我意识到，自我探索并不会在一次测试后结束。人在不同阶段会不断重新理解自己，真正需要的是
                <strong className={styles.selfly0Emphasis}>长期记录、回看与反思</strong>。
              </p>
              <p className={styles.p}>
                <strong className={styles.selfly0DecisionLabel}>设计策略</strong>&nbsp;&nbsp;&nbsp;
                基于这一洞察，Selfly 从一次性的自我探索工具，转向
                <strong className={styles.selfly0Emphasis}>更长期的个人记录空间</strong>
                ——在体验上从预设练习调整为
                <strong className={styles.selfly0Emphasis}>更自由的记录方式</strong>，并通过
                <strong className={styles.selfly0Emphasis}>每日聚焦</strong>与
                <strong className={styles.selfly0Emphasis}>回顾机制</strong>，让记录真正进入日常。
              </p>
            </div>
          </div>
        </section>
        <ChapterIntro id="framework" icon="🔁" title="体验框架">
          我用 Today / Explore / Review 把“当下、记录、回看”组织成一个日常循环。
        </ChapterIntro>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.caseText}>
            <h2>产品结构</h2>
            <div className={styles.selfly0Body}>
              <h3>Today / Explore / Review —— 当下、记录与回看</h3>
              <p>
                Selfly 用三个 Tab 建立「当下—记录—回看」的清晰节奏。
                下文会先展开 Today 的每日节奏，再讲 Explore 的记录架构，最后讲 Review 的回顾机制。
              </p>
              <div className={styles.designPoints}>
                <h4>结构划分</h4>
                <ul>
                  <li>
                    <strong>Today：聚焦当下</strong> — 克制入口，不是无限待办
                  </li>
                  <li>Explore：承载不同记录方式 — 按内容选容器，而非统一结构</li>
                  <li>Review：把旧内容重新带回 — 回看自己，而非 KPI 统计</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <ChapterIntro id="today" icon="🎯" title="Today：降低任务压力">
          今日页不是为了收集更多任务，而是帮助用户判断今天真正重要的事。
        </ChapterIntro>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.caseText}>
            <h2>Top 3 限制</h2>
            <div className={styles.selfly0Body}>
              <h3>把今日页从任务收集器变成选择器</h3>
              <p>
                我没有把首页设计成可以无限添加的任务列表，而是让用户每天只保留三件最重要的事。
                这个限制不是功能缺失，而是刻意把“收集更多任务”转成“判断今天真正重要的事”。
              </p>
              <p>
                如果今日页同时承载大量待办、计划和快速记录，它很快会变成另一个任务管理器。
                Top 3 的作用是压低信息密度，保留完成反馈，让首页始终服务于聚焦，而不是制造新的压力。
              </p>
              <div className={styles.designPoints}>
                <h4>设计取舍</h4>
                <ul>
                  <li>减少任务堆积</li>
                  <li>迫使用户做选择</li>
                  <li>保留完成反馈</li>
                  <li>降低首页信息密度</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.caseText}>
            <h2>每日节奏</h2>
            <div className={styles.selfly0Body}>
              <h3>用 Top 3、Tomorrow 和 Backlog 控制任务压力</h3>
              <p>
                仅限制今日任务还不够，用户仍然需要处理那些暂时不属于今天、但仍需要保留的事项。
                因此我把今日页拆成三个状态：今天要做的进入 Top 3，暂时不处理的进入 Backlog，已经想好的明日事项进入 Tomorrow。
              </p>
              <p>
                这个结构让今日页保持轻量，同时给未来事项一个明确去处。
                晚上提前写下的 Tomorrow 会在跨日后自动成为新的今日重点，减少第二天重新启动时的判断成本。
              </p>
              <div className={styles.designPoints}>
                <h4>行为模型</h4>
                <ul>
                  <li>
                    <strong>日常使用行为模型</strong>
                  </li>
                  <li>分流非今日事项</li>
                  <li>降低第二天启动成本</li>
                  <li>让待办服务于记录节奏</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <ChapterIntro id="explore" icon="🧩" title="Explore：降低开始记录的成本">
          记录系统不应该让用户先理解功能规则，而应该让用户按内容选择合适的记录方式。
        </ChapterIntro>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.caseText}>
            <h2>模块化记录</h2>
            <div className={styles.selfly0Body}>
              <h3>架构收敛：从功能名称到记录方式</h3>
              <p>
                我对原有自我探索功能进行结构重组，把价值观、愿景板、成功日记、优势测试等独立入口，抽象成清单、计划、日记和图册四类记录容器。
                这样用户理解的是记录方式，而不是一组彼此割裂的工具。
              </p>
              <p>
                真实生活中的记录内容形态并不相同：有些只是一句话，有些需要长文整理，有些更偏视觉表达。
                Selfly 通过清单、计划、日记、图册、灵感模板和自定义模块，让用户按内容本身选择记录方式。
              </p>
              <div className={styles.beforeAfterGrid} aria-label="改造前后对比">
                <div className={styles.beforeAfterCard}>
                  <span>改造前</span>
                  <p>用户看到的是一组功能名称，需要分别理解每个入口的用途和规则。</p>
                </div>
                <div className={styles.beforeAfterCard}>
                  <span>改造后</span>
                  <p>用户看到的是四种记录方式，再用模板进入具体场景。</p>
                </div>
              </div>
              <div className={styles.designPoints}>
                <h4>设计决策</h4>
                <ul>
                  <li>
                    <strong>把功能入口抽象为记录容器</strong>
                  </li>
                  <li>减少用户理解成本</li>
                  <li>按内容形态匹配记录方式</li>
                  <li>统一不同记录模块的基础结构</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.caseText}>
            <h2>优化创建体验</h2>
            <div className={styles.selfly0Body}>
              <h3>从空白配置到场景模板</h3>
              <p>
                我发现高度自定义并不等于容易开始。新用户如果一开始就面对类型、名称、图标和设置，启动成本反而会被提前放大。
                因此我把创建模块改成两条路径：熟悉产品的人可以自定义，新用户可以从情绪日记、年度目标、我的边界、理想自我等模板直接开始。
              </p>
              <div className={styles.beforeAfterGrid} aria-label="改造前后对比">
                <div className={styles.beforeAfterCard}>
                  <span>改造前</span>
                  <p>用户先面对配置项，再决定自己要记录什么。</p>
                </div>
                <div className={styles.beforeAfterCard}>
                  <span>改造后</span>
                  <p>用户先看到真实场景，再一键创建对应模块。</p>
                </div>
              </div>
              <div className={styles.designPoints}>
                <h4>设计要点</h4>
                <ul>
                  <li>
                    <strong>首次使用路径优化</strong>
                  </li>
                  <li>降低空白页压力</li>
                  <li>用场景解释模块</li>
                  <li>创建后直接进入记录</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <ChapterIntro id="review" icon="🕰️" title="Review：让旧内容重新出现">
          回顾不是数据统计，而是把过去的记录轻量地带回用户面前。
        </ChapterIntro>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.caseText}>
            <h2>低压力回顾</h2>
            <div className={styles.selfly0Body}>
              <h3>回顾机制：把沉淀内容重新分发给用户</h3>
              <p>
                如果记录只停留在各个模块里，用户很难主动回看。我把回顾设计成一个跨模块的内容再分发机制：
                清单、计划、日记、图册里的内容都可以进入每日卡片流，用户也可以选择全部、指定模块或指定分类。
                这样回顾不再依赖用户主动寻找，而是让过去的记录自然重新出现。
              </p>
              <p>
                我没有把回顾页做成数据中心，而是刻意弱化连续打卡、完成统计和趋势分析带来的焦虑。
                回顾更接近翻阅旧笔记：用户可以轻量浏览过去的记录，并重新理解当时在意的内容。
              </p>
              <div className={styles.beforeAfterGrid} aria-label="改造前后对比">
                <div className={styles.beforeAfterCard}>
                  <span>改造前</span>
                  <p>内容分散在不同模块中，回顾依赖用户主动进入。</p>
                </div>
                <div className={styles.beforeAfterCard}>
                  <span>改造后</span>
                  <p>系统每天从真实记录中抽取卡片，让旧内容重新出现。</p>
                </div>
              </div>
              <div className={styles.designPoints}>
                <h4>机制设计</h4>
                <ul>
                  <li>
                    <strong>跨模块重新分发内容</strong>
                  </li>
                  <li>让旧记录自然出现</li>
                  <li>支持自选回顾范围</li>
                  <li>弱化统计与连续性焦虑</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <ChapterIntro id="launch" icon="🚀" title="iOS 落地与上线">
          这个项目不只停留在设计方案，我也把它实现为可下载、可使用、可订阅的 iOS 产品。
        </ChapterIntro>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.caseText}>
            <h2>产品化落地</h2>
            <div className={styles.selfly0Body}>
              <h3>把设计方案推进到真实可用的 iOS 产品</h3>
              <p>
                除了体验设计，我也独立完成了 Selfly 的 iOS 实现，包括 SwiftUI 界面、SwiftData
                数据模型、iCloud 同步、StoreKit 订阅、多语言和数据重置等能力，让设计方案能够在真实交互和上线环境中成立。
              </p>
              <p>
                在实现过程中，我也持续校准真实使用中的体验边界，例如长文本承载、多语言显示、交互状态、内容清晰度和页面反馈，
                确保产品在不同内容和使用场景下依然稳定、清楚、可用。
              </p>
              <div className={styles.designPoints}>
                <h4>落地能力</h4>
                <ul>
                  <li>
                    <strong>从设计方案到 SwiftUI 实现</strong>
                  </li>
                  <li>数据模型、同步、订阅与多语言支持</li>
                  <li>真实使用场景下的体验边界校准</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.caseText}>
            <h2>App Store 上线</h2>
            <div className={styles.selfly0Body}>
              <h3>从内部版本到可下载的公开产品</h3>
              <p>
                我独立完成了 App Store Connect 配置、审核材料、隐私与订阅说明，以及提审反馈处理，让 Selfly
                成为可公开下载的 iOS 应用。
              </p>
              <div className={styles.designPoints}>
                <h4>上架清单</h4>
                <ul>
                  <li>
                    <strong>App Store Connect 配置</strong>
                  </li>
                  <li>审核材料与产品描述</li>
                  <li>隐私、订阅与权限说明</li>
                  <li>提审反馈处理与版本发布</li>
                </ul>
              </div>
              <p className={styles.p}>
                <a
                  className="buttonSticker buttonStickerOrange"
                  href={appDownloadUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  在 App Store 查看 Selfly
                </a>
              </p>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.caseText}>
            <h2>项目反思</h2>
            <div className={styles.selfly0ReflectionBody}>
              <p>
                Selfly 让我更明确地意识到，产品体验的质量往往来自连续的取舍，而不是单个功能的完成度。面向长期使用的个人工具，需要持续平衡功能完整性、信息密度和情绪负担。
              </p>
              <p>
                这个过程也让我意识到，0 到 1 阶段最难的并不是持续增加功能，而是在不断变化的需求中保持产品边界清晰，并判断哪些能力真正支撑长期使用。
              </p>
              <p>
                作为一个独立完成的产品项目，它也训练了我从产品约束、体验判断到真实上线之间建立闭环的能力：设计不只停留在方案层面，也需要在实现、审核和持续迭代中被验证。
              </p>
            </div>
          </div>
        </section>
        <hr className={styles.selfly0SectionDivider} aria-hidden="true" />
        <section className={styles.selfly0ContactSection} aria-labelledby="selfly0-contact-title">
          <div className={styles.selfly0ContactInner}>
            <h2 id="selfly0-contact-title">想了解更多细节？</h2>
            <p>欢迎联系我聊聊这个项目。</p>
            <a href="mailto:lijaemin1993@gmail.com?subject=Selfly%20project" className={styles.selfly0ContactLink}>
              lijaemin1993@gmail.com
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
