import { Laptop, Cloud, ChartNoAxesColumnIncreasing } from "lucide-react";

export default function Services() {
    return (
        <section id="services" className="pt-48">
            <div className="w-full self-start flex flex-col items-center lg:items-start gap-4">
                <h2>Services</h2>
                <div className="flex flex-col md:flex-row justify-center items-stretch w-full h-[90%]">
                    {" "}
                    {/* Set the height of the parent to 90% */}
                    {/* First Service */}
                    <div className="md:w-1/3 flex justify-center items-center">
                        <div className="p-5 flex flex-col gap-4">
                            <Laptop size={40} className="min-h-[40px]" />
                            <h4 className="font-semibold text-lg">
                                Custom Website Design & Development
                            </h4>
                            <p className="text-gray-600">
                                I specialize in creating{" "}
                                <b className="text-foreground">
                                    high-performance
                                </b>
                                ,{" "}
                                <b className="text-foreground">
                                    custom websites
                                </b>{" "}
                                built with the{" "}
                                <b className="text-foreground">
                                    latest technologies
                                </b>{" "}
                                like <b className="text-foreground">React</b>{" "}
                                and <b className="text-foreground">Next.js</b>.
                                Whether you&apos;re looking for a stunning
                                design or seamless functionality, my websites
                                are tailored to meet your{" "}
                                <b className="text-foreground">
                                    unique business needs
                                </b>
                                . I prioritize{" "}
                                <b className="text-foreground">speed</b>,{" "}
                                <b className="text-foreground">performance</b>,
                                and{" "}
                                <b className="text-foreground">
                                    SEO optimization
                                </b>{" "}
                                to ensure your site ranks high in search engine
                                results, delivering a{" "}
                                <b className="text-foreground">fast</b> and{" "}
                                <b className="text-foreground">engaging</b> user
                                experience. By integrating{" "}
                                <b className="text-foreground">
                                    cutting-edge tools
                                </b>{" "}
                                and{" "}
                                <b className="text-foreground">
                                    responsive design
                                </b>
                                , I create websites that not only look great but
                                are also optimized for every device.
                            </p>
                        </div>
                    </div>
                    {/* First Divider */}
                    <div className="h-[1px] md:h-auto md:w-[1px] bg-gray-600 flex-grow"></div>{" "}
                    {/* Set height to 90% with flex-grow */}
                    {/* Second Service */}
                    <div className="md:w-1/3 flex justify-center items-center">
                        <div className="p-5 flex flex-col gap-4">
                            <ChartNoAxesColumnIncreasing
                                size={40}
                                className="min-h-[40px]"
                            />
                            <h4 className="font-semibold text-lg">
                                Full Project Lifecycle Management
                            </h4>
                            <p className="text-gray-600">
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
                    <div className="h-[1px] md:w-[1px] md:h-auto bg-gray-600 flex-grow"></div>{" "}
                    {/* Set height to 90% with flex-grow */}
                    {/* Third Service */}
                    <div className="md:w-1/3 flex justify-center items-center">
                        <div className="p-5 flex flex-col gap-4">
                            <Cloud size={40} className="min-h-[40px]" />
                            <h4 className="font-semibold text-lg">
                                Hosting, Maintenance, & Support
                            </h4>
                            <p className="text-gray-600">
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
