import { GeistSans, GeistMono } from "geist/font";
import { GithubIcon } from "lucide-react";
import { RootProvider } from "next-docs-ui/provider";
import { DocsLayout } from "next-docs-ui/layout";
import { Nav } from "next-docs-ui/nav";

import { tree } from "@/app/source";
import { TitleProvider } from "@/app/title-provider";

import { cn } from "@/lib/cn";

import "next-docs-ui/style.css";
import "@/app/global.css";
import { Metadata } from "next";

// https://remixicon.com/icon/discord-line
function Discord({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
      <path
        className="fill-current"
        d="M8.52062 13.8456C7.48059 13.8456 6.63159 12.9011 6.63159 11.7444 6.63159 10.5876 7.45936 9.64307 8.52062 9.64307 9.57123 9.64307 10.4308 10.5876 10.4096 11.7444 10.4096 12.9011 9.57123 13.8456 8.52062 13.8456ZM15.4941 13.8456C14.454 13.8456 13.604 12.9011 13.604 11.7444 13.604 10.5876 14.4328 9.64307 15.4941 9.64307 16.5447 9.64307 17.4043 10.5876 17.3831 11.7444 17.3831 12.9011 16.5553 13.8456 15.4941 13.8456ZM10.1253 4.32272 9.81655 3.75977 9.18323 3.86532C7.71915 4.10934 6.32658 4.54652 5.02544 5.1458L4.79651 5.25124 4.65507 5.45985C2.0418 9.31417 1.3258 13.1084 1.68032 16.836L1.71897 17.2423 2.04912 17.4822C3.78851 18.7463 5.47417 19.5186 7.12727 20.0254L7.91657 20.2674 9.03013 17.5504C10.9397 18.0224 13.0592 18.0225 14.969 17.5508L16.0757 20.2681 16.8668 20.0254C18.5173 19.5191 20.2137 18.7469 21.9466 17.4809L22.2726 17.2428 22.3131 16.8412C22.7491 12.521 21.616 8.75749 19.3547 5.45628L19.2128 5.2492 18.9846 5.1448C17.6767 4.5466 16.2852 4.10957 14.8309 3.86549L14.2132 3.76182 13.8987 4.30344C13.8112 4.4542 13.7215 4.6244 13.6364 4.79662 12.5441 4.68445 11.456 4.68421 10.3726 4.79627 10.2882 4.62711 10.2025 4.46356 10.1253 4.32272ZM6.71436 16.61C6.91235 16.724 7.11973 16.8356 7.32557 16.9378L6.8764 18.0338C5.75585 17.6256 4.61837 17.0635 3.4476 16.2555 3.22313 13.1175 3.86092 9.95075 6.01196 6.68602 6.90962 6.29099 7.8535 5.98255 8.83606 5.77271 8.89631 5.89807 8.95235 6.02042 8.99839 6.12892L9.27128 6.77213 9.96259 6.67074C11.3152 6.47235 12.6772 6.47209 14.0523 6.671L14.7424 6.77082 15.0147 6.12892C15.0621 6.01719 15.1167 5.89523 15.1743 5.77298 16.1525 5.98301 17.098 6.29188 18.0029 6.68787 19.8781 9.50833 20.8241 12.6541 20.5486 16.255 19.3837 17.0623 18.2422 17.6246 17.1193 18.0333L16.6735 16.9387C16.8799 16.8362 17.0879 16.7243 17.2865 16.61 17.7763 16.3277 18.3039 15.9757 18.6402 15.6395L17.3606 14.36C17.1969 14.5237 16.837 14.7805 16.3831 15.0421 15.9388 15.2981 15.498 15.5049 15.2164 15.598 13.2126 16.2606 10.7883 16.2606 8.78443 15.598 8.50285 15.5049 8.06205 15.2981 7.61772 15.0421 7.16383 14.7805 6.80392 14.5237 6.64017 14.36L5.36065 15.6395C5.6969 15.9757 6.2245 16.3277 6.71436 16.61Z"
      />
    </svg>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        "font-sans [&_code]:font-mono [&_code]:not-italic [&_code]:font-normal",
      )}
      suppressHydrationWarning
    >
      <body>
        <RootProvider>
          <DocsLayout
            tree={tree}
            nav={{
              component: (
                <Nav
                  title={<>FAQ for the Next.js Discord&nbsp;server</>}
                  collapsibleSidebar={false}
                  items={[{ href: "/", children: "About this site" }]}
                  links={[
                    {
                      label: "Github",
                      icon: <GithubIcon className="h-5 w-5" />,
                      href: "https://github.com/joulev/nextjs-faq",
                      external: true,
                    },
                    {
                      label: "Discord",
                      icon: <Discord className="h-5 w-5" />,
                      href: "https://discord.gg/nextjs",
                      external: true,
                    },
                  ]}
                />
              ),
            }}
          >
            <TitleProvider tree={tree}>{children}</TitleProvider>
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://nextjs-faq.com"),
};
