import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, type Locale } from "@/i18n/config";
import styles from "../[slug]/project.module.css";

const appDownloadUrl = "https://apps.apple.com/cn/app/selfly%E6%97%A5%E8%AE%B0/id6762545235";

type Selfly0PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Selfly0Page({ params }: Selfly0PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  return (
    <div className={`${styles.pagePlain} ${styles.selfly0Page} ${styles.selfly0V2}`} data-page="about2">
      <SiteHeader locale={locale} />
      <main className={styles.main}>
        {/* ── Cover Image ── */}
        <section className={styles.v2FullImage}>
          <Image
            src="/images/selfly0/hero.png"
            alt="Selfly app preview showing Today, My Journal, and Review screens"
            width={1500}
            height={844}
            className={styles.v2CoverImg}
            priority
          />
        </section>

        {/* ── Hero ── */}
        <header className={styles.v2Hero}>
          <h1 className={styles.v2HeroTitle}>
            Selfly：让记录不再变成<em>压力</em>
          </h1>
          <p className={styles.v2HeroSubtitle}>
            帮助用户每日聚焦、自我记录与长期回看的 iOS 产品
          </p>
          <div className={styles.v2HeroMeta}>
            <span>2025–2026</span>
            <span className={styles.v2MetaDot}>·</span>
            <span>Solo Product Designer &amp; iOS Developer</span>
          </div>
        </header>

        {/* ── Overview ── */}
        <section className={styles.v2Section}>
          <div className={styles.v2Label}>Project Overview</div>
          <div className={styles.v2Grid}>
            <h2 className={styles.v2Heading}>从一次性探索，到可持续的自我记录系统</h2>
            <div className={styles.v2Body}>
              <p>
                Selfly 最初是一个帮助用户进行「自我探索」的工具，通过价值观、优势等练习，让人更清晰地认识自己。
                它来源于我的<strong>个人真实需求</strong>。
              </p>
              <p>
                在迭代过程中，我意识到，自我探索并不会在一次测试后结束。人在不同阶段会不断重新理解自己，真正需要的是<strong>长期记录、回看与反思</strong>。
              </p>
              <p>
                基于这一洞察，Selfly 从一次性的自我探索工具，转向<strong>更长期的个人记录空间</strong>——在体验上从预设练习调整为<strong>更自由的记录方式</strong>，并通过<strong>每日聚焦</strong>与<strong>回顾机制</strong>，让记录真正进入日常。
              </p>
            </div>
          </div>
          <div className={styles.v2Grid}>
            <div className={styles.v2SubLabel}>核心洞察</div>
            <ul className={styles.v2List}>
              <li>自我探索是持续变化的，而不是一次性的结果</li>
              <li>固定的探索模块，难以覆盖真实而长期的个人状态</li>
              <li>记录本身不会自然持续，需要进入日常循环</li>
            </ul>
          </div>
          <div className={styles.v2Grid}>
            <div className={styles.v2SubLabel}>设计策略</div>
            <ul className={styles.v2List}>
              <li>从预设练习转向更自由的记录方式</li>
              <li>加入每日聚焦与回顾机制，让记录能够长期发生</li>
            </ul>
          </div>
        </section>

        {/* ── Product Structure ── */}
        <section className={styles.v2Section}>
          <div className={styles.v2Label}>产品结构</div>
          <div className={styles.v2Grid}>
            <h2 className={styles.v2Heading}>Today / Explore / Review —— 当下、记录与回看</h2>
            <div className={styles.v2Body}>
              <p>
                Selfly 用三个 Tab 建立「当下—记录—回看」的清晰节奏。
              </p>
              <ul className={styles.v2List}>
                <li><strong>Today：聚焦当下</strong> — 克制入口，不是无限待办</li>
                <li><strong>Explore：承载不同记录方式</strong> — 按内容选容器，而非统一结构</li>
                <li><strong>Review：把旧内容重新带回</strong> — 回看自己，而非 KPI 统计</li>
              </ul>
            </div>
          </div>
          <div className={styles.v2FullImage}>
            <div className={styles.appPreviewPlaceholder} aria-hidden="true" />
          </div>
        </section>

        {/* ── Today: Top 3 ── */}
        <section className={styles.v2Section}>
          <div className={styles.v2Label}>Today</div>
          <div className={styles.v2Grid}>
            <h2 className={styles.v2Heading}>把今日页从任务收集器变成选择器</h2>
            <div className={styles.v2Body}>
              <p>
                我没有把首页设计成可以无限添加的任务列表，而是让用户每天只保留三件最重要的事。
                这个限制不是功能缺失，而是刻意把"收集更多任务"转成"判断今天真正重要的事"。
              </p>
              <p>
                如果今日页同时承载大量待办、计划和快速记录，它很快会变成另一个任务管理器。
                Top 3 的作用是压低信息密度，保留完成反馈，让首页始终服务于聚焦，而不是制造新的压力。
              </p>
            </div>
          </div>
          <div className={styles.v2FullImage}>
            <div className={styles.appPreviewPlaceholder} aria-hidden="true" />
          </div>
        </section>

        {/* ── Today: Daily Rhythm ── */}
        <section className={styles.v2Section}>
          <div className={styles.v2Label}>每日节奏</div>
          <div className={styles.v2Grid}>
            <h2 className={styles.v2Heading}>用 Top 3、Tomorrow 和 Backlog 控制任务压力</h2>
            <div className={styles.v2Body}>
              <p>
                仅限制今日任务还不够，用户仍然需要处理那些暂时不属于今天、但仍需要保留的事项。
                因此我把今日页拆成三个状态：今天要做的进入 Top 3，暂时不处理的进入 Backlog，已经想好的明日事项进入 Tomorrow。
              </p>
              <p>
                这个结构让今日页保持轻量，同时给未来事项一个明确去处。
                晚上提前写下的 Tomorrow 会在跨日后自动成为新的今日重点，减少第二天重新启动时的判断成本。
              </p>
            </div>
          </div>
          <div className={styles.v2FullImage}>
            <div className={styles.appPreviewPlaceholder} aria-hidden="true" />
          </div>
        </section>

        {/* ── Explore: Modular Recording ── */}
        <section className={styles.v2Section}>
          <div className={styles.v2Label}>Explore</div>
          <div className={styles.v2Grid}>
            <h2 className={styles.v2Heading}>架构收敛：从功能名称到记录方式</h2>
            <div className={styles.v2Body}>
              <p>
                我对原有自我探索功能进行结构重组，把价值观、愿景板、成功日记、优势测试等独立入口，抽象成清单、计划、日记和图册四类记录容器。
                这样用户理解的是记录方式，而不是一组彼此割裂的工具。
              </p>
              <p>
                真实生活中的记录内容形态并不相同：有些只是一句话，有些需要长文整理，有些更偏视觉表达。
                Selfly 通过清单、计划、日记、图册、灵感模板和自定义模块，让用户按内容本身选择记录方式。
              </p>
            </div>
          </div>
          <div className={styles.v2FullImage}>
            <div className={styles.appPreviewPlaceholder} aria-hidden="true" />
          </div>
        </section>

        {/* ── Explore: Creation Flow ── */}
        <section className={styles.v2Section}>
          <div className={styles.v2Label}>优化创建体验</div>
          <div className={styles.v2Grid}>
            <h2 className={styles.v2Heading}>从空白配置到场景模板</h2>
            <div className={styles.v2Body}>
              <p>
                我发现高度自定义并不等于容易开始。新用户如果一开始就面对类型、名称、图标和设置，启动成本反而会被提前放大。
                因此我把创建模块改成两条路径：熟悉产品的人可以自定义，新用户可以从情绪日记、年度目标、我的边界、理想自我等模板直接开始。
              </p>
            </div>
          </div>
          <div className={styles.v2FullImage}>
            <div className={styles.appPreviewPlaceholder} aria-hidden="true" />
          </div>
        </section>

        {/* ── Review ── */}
        <section className={styles.v2Section}>
          <div className={styles.v2Label}>Review</div>
          <div className={styles.v2Grid}>
            <h2 className={styles.v2Heading}>回顾机制：把沉淀内容重新分发给用户</h2>
            <div className={styles.v2Body}>
              <p>
                如果记录只停留在各个模块里，用户很难主动回看。我把回顾设计成一个跨模块的内容再分发机制：
                清单、计划、日记、图册里的内容都可以进入每日卡片流，用户也可以选择全部、指定模块或指定分类。
              </p>
              <p>
                我没有把回顾页做成数据中心，而是刻意弱化连续打卡、完成统计和趋势分析带来的焦虑。
                回顾更接近翻阅旧笔记：用户可以轻量浏览过去的记录，并重新理解当时在意的内容。
              </p>
            </div>
          </div>
          <div className={styles.v2FullImage}>
            <div className={styles.appPreviewPlaceholder} aria-hidden="true" />
          </div>
        </section>

        {/* ── Launch ── */}
        <section className={styles.v2Section}>
          <div className={styles.v2Label}>iOS 落地与上线</div>
          <div className={styles.v2Grid}>
            <h2 className={styles.v2Heading}>把设计方案推进到真实可用的 iOS 产品</h2>
            <div className={styles.v2Body}>
              <p>
                除了体验设计，我也独立完成了 Selfly 的 iOS 实现，包括 SwiftUI 界面、SwiftData
                数据模型、iCloud 同步、StoreKit 订阅、多语言和数据重置等能力，让设计方案能够在真实交互和上线环境中成立。
              </p>
              <p>
                在实现过程中，我也持续校准真实使用中的体验边界，例如长文本承载、多语言显示、交互状态、内容清晰度和页面反馈，
                确保产品在不同内容和使用场景下依然稳定、清楚、可用。
              </p>
            </div>
          </div>
          <div className={styles.v2FullImage}>
            <div className={styles.appPreviewPlaceholder} aria-hidden="true" />
          </div>
        </section>

        {/* ── App Store ── */}
        <section className={styles.v2Section}>
          <div className={styles.v2Label}>App Store 上线</div>
          <div className={styles.v2Grid}>
            <h2 className={styles.v2Heading}>从内部版本到可下载的公开产品</h2>
            <div className={styles.v2Body}>
              <p>
                我独立完成了 App Store Connect 配置、审核材料、隐私与订阅说明，以及提审反馈处理，让 Selfly
                成为可公开下载的 iOS 应用。
              </p>
              <p>
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
          <div className={styles.v2FullImage}>
            <div className={styles.appPreviewPlaceholder} aria-hidden="true" />
          </div>
        </section>

        {/* ── Reflection ── */}
        <section className={styles.v2Section}>
          <div className={styles.v2Label}>项目反思</div>
          <div className={styles.v2Grid}>
            <div className={styles.v2Body}>
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

        {/* ── Contact ── */}
        <section className={styles.v2Contact}>
          <h2>想了解更多细节？</h2>
          <p>欢迎联系我聊聊这个项目。</p>
          <a href="mailto:lijaemin1993@gmail.com?subject=Selfly%20project" className={styles.v2ContactLink}>
            lijaemin1993@gmail.com
          </a>
        </section>
      </main>
    </div>
  );
}
