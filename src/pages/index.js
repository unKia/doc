import Button from "@/components/Common/button";
import Layout from "@/components/Layout";
import Link from "next/link";
import PlatformIcon from "@/components/Common/icons";
import Section from "@/components/Common/section";
import Head from "next/head";
import {
  GoContainer,
  GoServer,
  GoDatabase,
  GoRocket,
  GoMail,
  GoPaperclip,
  GoTerminal,
  GoCode,
  GoPerson,
  GoGlobe,
  GoArrowLeft,
  GoCloud
} from "react-icons/go";
import Card from "@/components/Common/card";

const GETTING_STARTED_ITEMS = [
  {
    alt: "nodejs",
    platform: "NodeJS",
    link: "/paas/nodejs/getting-started"
  },
  {
    alt: "django",
    platform: "Django",
    link: "/paas/django/getting-started"
  },
  {
    alt: "laravel",
    platform: "Laravel",
    link: "/paas/laravel/getting-started"
  },
  {
    alt: "next",
    platform: "NextJS",
    link: "/paas/nextjs/getting-started"
  },
  {
    alt: "netcore",
    platform: "NET.",
    link: "/paas/dotnet/getting-started"
  },
  {
    alt: "docker",
    platform: "Docker",
    link: "/paas/docker/getting-started"
  },
  {
    alt: "vue",
    platform: "Vue",
    link: "/paas/vue/getting-started"
  },
  {
    alt: "react",
    platform: "React",
    link: "/paas/react/getting-started"
  }
];

const PRODUCTS = [
  {
    title: "پلتفرم (PaaS)",
    icon: <GoContainer />,
    desc: "اطلاعات پلتفرم‌ها و نحوه راه‌اندازی آن‌ها در لیارا",
    link: "/paas/about"
  },
  {
    title: "سرور ابری (IaaS)",
    icon: <GoCloud />,
    desc: "اطلاعات سرورهای ابری و نحوه راه‌اندازی آن‌ها در لیارا",
    link: "/iaas/about"
  },
  {
    title: "دیتابیس (DBaaS)",
    icon: <GoDatabase />,
    desc: "اطلاعات مربوط به دیتابیس‌ها و استفاده اصولی از آن‌ها",
    link: "/dbaas/about"
  },
  {
    title: "برنامه‌های آماده",
    icon: <GoRocket />,
    desc:
      "اطلاعات در مورد شخصی‌سازی و نحوه کار با برنامه‌هایی که فقط با یک کلیک، در لیارا به شما تحویل داده می‌شوند.",
    link: "/one-click-apps/about"
  },
  {
    title: "ایمیل",
    icon: <GoMail />,
    desc:
      "اطلاعات مربوط به سرویس ایمیل لیارا، نحوه راه‌اندازی، اتصال برنامه به ایمیل سرور و مدیریت ایمیل‌ها",
    link: "/email-server/about"
  },
  {
    title: "ذخیره‌سازی ابری (Object Storage)",
    icon: <GoPaperclip  />,
    desc:
      "جزئیات دقیق مربوط به سرویس ذخیره‌سازی ابری لیارا، نحوه استفاده از آن و مدیریت باکت‌ها",
    link: "/object-storage/about"
  },
  {
    title: "سامانه مدیریت دامنه (DNS)",
    icon: <GoGlobe />,
    desc:
      "اطلاعات مربوط به سرویس ایمیل لیارا، نحوه راه‌اندازی، اتصال برنامه به ایمیل‌سرور و مدیریت ایمیل‌ها",
    link: "/dns-management-system/about"
  }
];

const REFERENCES = [
  {
    title: "Liara CLI",
    icon: <GoTerminal />,
    desc: "اطلاعات در مورد رابط خط فرمان لیارا و نحوه استفاده و راه‌اندازی آن‌",
    link: "/references/cli/about"
  },
  {
    title: "Liara API",
    icon: <GoCode />,
    desc: "اطلاعات در مورد رابط وب‌سرویس لیارا، نحوه استفاده و کاربردهای آن",
    link: "/references/api/about"
  },
  {
    title: "پنل کاربری لیارا",
    icon: <GoPerson />,
    desc:
      "اطلاعات در مورد پنل کاربری لیارا، از ثبت تیکت تا تخمین‌هزینه‌های سرویس‌های مورد استفاده",
    link: "/references/console/about"
  }
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>مستندات سرویس‌های ابری - لیارا</title>
      </Head>
      <div>
        <div
          id="welcome-continer"
          className="bg-[url('/static/images/bg-main.webp')] border bg-right	md:bg-left border-[#c4c4c4] relative p-8 md:h-[250px] md:w-[1050px] flex flex-col justify-center rounded-lg"
        >
          <h1 className="text-[20px] font-bold md:font-normal md:text-[35px]">
            {" "}به مستندات لیارا خوش‌آمدید 👋🏼
          </h1>
          <p className="mt-2 md:w-[50%] eading-7">
            اینجا خانه‌ی توسعه‌دهندگان است، خانه‌ی خودتان. راحت باشید.
          </p>
        </div>
        <Section
          id="home-getting-started"
          title={"همین حالا استقرار را شروع کنید"}
        >
          <div className="grid md:grid-cols-4 gap-4">
            {GETTING_STARTED_ITEMS.map(item =>
              <Link href={item.link}>
                <Card className="flex w-full cursor-pointer items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-[40px] p-1  bg-[#333] rounded-lg">
                      <PlatformIcon platform={item.alt} />
                    </div>
                    <h4>
                      شروع به کار با {item.platform}
                    </h4>
                  </div>
                  <GoArrowLeft className="ml-1" />
                </Card>
              </Link>
            )}
          </div>
        </Section>
        <Section id="home-products" title={"محصولات لیارا"}>
          <div className="grid md:grid-cols-3 gap-4">
            {PRODUCTS.map(item =>
              <Link href={item.link}>
                <Card className="min-h-[180px] flex flex-col cursor-pointer justify-between items-start w-full">
                  <div className="w-full">
                    <div className="flex items-center justify-between gap-3">
                      <h4>
                        {item.title}
                      </h4>
                      <div className="bg-[#222] text-white p-1 rounded-md">
                        {item.icon}
                      </div>
                    </div>
                    <p className="text-[gray] leading-6 text-[14px] mt-3">
                      {item.desc}
                    </p>
                  </div>
                  <Button variant="link">بیشتر بدانید</Button>
                </Card>
              </Link>
            )}
          </div>
        </Section>

        <Section id="home-references" title={"ارجاعات"}>
          <div className="grid md:grid-cols-3 gap-4">
            {REFERENCES.map(item =>
              <Card className="min-h-[180px] flex flex-col justify-between items-start w-full">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h4>
                      {item.title}
                    </h4>
                    <div className="bg-[#222] text-white p-1 rounded-md">
                      {item.icon}
                    </div>
                  </div>
                  <p className="text-[gray] leading-6 text-[14px] mt-3">
                    {item.desc}
                  </p>
                </div>
                <Link href={item.link}>
                  <Button variant="link">بیشتر بدانید</Button>
                </Link>
              </Card>
            )}
          </div>
        </Section>
      </div>
    </Layout>
  );
}
