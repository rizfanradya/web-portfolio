import { retrieveData } from "@/utils/retrieveData";
import MainTypewriter from "./mainTypewriter";
import MainCta from "./mainCta";

export default async function MainContent() {
  const data = await retrieveData("main_content");

  return (
    <div className="flex flex-col gap-4 md:w-2/5">
      {data.map((doc) => (
        <div key={doc.id} className="flex flex-col gap-4">
          <h1 className="text-xl font-medium">Hello, i&apos;m</h1>
          <MainTypewriter />
          <p>{doc.short_about}</p>
        </div>
      ))}
      <MainCta />
    </div>
  );
}
