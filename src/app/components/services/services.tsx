import { Laptop, Cloud, ChartNoAxesColumnIncreasing } from "lucide-react";

export default function Services() {
    return (
        <section
            data-aos="fade-down"
            id="services"
            className="py-10 my-0 flex bg-accent items-center justify-center text-background"
        >
            <div className="w-full flex flex-col items-center lg:items-start gap-4">
                <h2>Services</h2>
                <div className="flex flex-col md:flex-row justify-center items-stretch w-full h-[90%]">
                    {/* First Service */}
                    <div className="md:w-1/3 flex justify-center items-center">
                        <div className="p-5 flex flex-col gap-4">
                            <Laptop size={40} className="min-h-[40px]" />
                            <h4 className="font-bold text-lg">
                                Custom Website Design & Development
                            </h4>
                            <p>
                                I specialize in creating <b>high-performance</b>
                                , <b>custom websites</b> built with the{" "}
                                <b>latest technologies</b> like <b>React</b> and{" "}
                                <b>Next.js</b>. Whether you&apos;re looking for
                                a stunning design or seamless functionality, my
                                websites are tailored to meet your{" "}
                                <b>unique business needs</b>. I prioritize{" "}
                                <b>speed</b>, <b>performance</b>, and{" "}
                                <b>SEO optimization</b> to ensure your site
                                ranks high in search engine results, delivering
                                a <b>fast</b> and <b>engaging</b> user
                                experience. By integrating{" "}
                                <b>cutting-edge tools</b> and{" "}
                                <b>responsive design</b>, I create websites that
                                not only look great but are also optimized for
                                every device.
                            </p>
                        </div>
                    </div>
                    {/* First Divider */}
                    <div className="h-[1px] md:h-auto md:w-[1px] bg-gray-600 flex-grow"></div>
                    {/* Second Service */}
                    <div className="md:w-1/3 flex justify-center items-center">
                        <div className="p-5 flex flex-col gap-4">
                            <ChartNoAxesColumnIncreasing
                                size={40}
                                className="min-h-[40px]"
                            />
                            <h4 className="font-bold text-lg">
                                Full Project Lifecycle Management
                            </h4>
                            <p>
                                From <b>concept to completion</b>, I manage the{" "}
                                <b>entire lifecycle</b> of your project,
                                ensuring a <b>smooth</b> and{" "}
                                <b>successful delivery</b>. My approach combines{" "}
                                <b>agile development practices</b> with{" "}
                                <b>clear communication</b>, so you stay informed
                                every step of the way. With expertise in{" "}
                                <b>Next.js</b> and{" "}
                                <b>modern web development frameworks</b>, I
                                handle everything from initial <b>planning</b>{" "}
                                and <b>wireframing</b> to <b>deployment</b> and
                                beyond. I don’t just build websites – I build{" "}
                                <b>partnerships</b>, working closely with you to
                                align every aspect of the project with your{" "}
                                <b>business goals</b>.
                            </p>
                        </div>
                    </div>
                    {/* Second Divider */}
                    <div className="h-[1px] md:w-[1px] md:h-auto bg-gray-600 flex-grow"></div>
                    {/* Third Service */}
                    <div className="md:w-1/3 flex justify-center items-center">
                        <div className="p-5 flex flex-col gap-4">
                            <Cloud size={40} className="min-h-[40px]" />
                            <h4 className="font-bold text-lg">
                                Hosting, Maintenance, & Support
                            </h4>
                            <p>
                                My commitment to your success doesn’t end at{" "}
                                <b>launch</b>. I provide{" "}
                                <b>comprehensive hosting solutions</b>,{" "}
                                <b>maintenance</b>, and ongoing <b>support</b>{" "}
                                to keep your website <b>secure</b>, <b>fast</b>,
                                and <b>up-to-date</b>. Whether it&apos;s
                                handling <b>server configurations</b>,
                                monitoring <b>site performance</b>, or
                                implementing the latest <b>updates</b>, I ensure
                                your website runs smoothly at all times. Plus,
                                with integrated <b>analytics</b> and{" "}
                                <b>monitoring tools</b>, I give you the insights
                                you need to make <b>data-driven decisions</b>{" "}
                                that help your business grow. From{" "}
                                <b>troubleshooting</b> to <b>scaling</b>,
                                I&apos;m here to support your website’s{" "}
                                <b>long-term success</b>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
