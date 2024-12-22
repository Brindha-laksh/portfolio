import Resume from "../asset/Resume.PNG";

export default function Contact() {
    const config = {
        email: "brindhalaksh@gmail.com",
        phone: "9080304392"
    };

    return (
        <section className=" bg-indigo-900 py-16" id="contact">
            <div className="container mx-auto text-center px-4">
                <h1 className="text-4xl font-extrabold text-white my-6">Contact</h1>
                <p className="text-white text-lg mb-6">
                    If you want to discuss in detail, please contact me
                </p>
                
                {/* Contact Information */}
                <div className="text-white space-y-4 mb-8">
                    <p className="text-xl font-semibold">Email: <span className="text-indigo-300">{config.email}</span></p>
                    <p className="text-xl font-semibold">Phone: <span className="text-indigo-300">{config.phone}</span></p>
                </div>

                {/* Optional Resume Image */}
                <div>
                    <a href={Resume} target="_blank" rel="noopener noreferrer">
                                         </a>
                </div>
            </div>
        </section>
    );
}
