import React from "react";
import ImageGallery from 'react-image-gallery';


const FlatDetail = () => {
    const images = [
        {
            original: '/img/sample11.png',
            thumbnail: '/img/sample11.png',
        },
        {
            original: '/img/sample12.png',
            thumbnail: '/img/sample12.png',
        },
        {
            original: '/img/sample13.png',
            thumbnail: '/img/sample13.png',
        },
    ];

    return (
        <div className="flat-detail">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">Arthaya Homes</h1>
                            <h2 className="page-description">Details</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="fd-top flat-detail-content">
                            <div>
                                <h3 className="flat-detail-title">Arthaya</h3>
                                <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                                DahanukarWadi , Kandivali West</p>
                            </div>
                            <div>
                                <span className="fd-price">₹1.15cr</span>
                            </div>
                        </div>
                        <ImageGallery flickThreshold={0.50} slideDuration={0} items={images} showNav={false} showFullscreenButton={false} showPlayButton={false} />
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="fd-item">
    <h4>Overview & Property Details</h4>

    <p>
        Arthaya Homes is a premium residential project located in 
        Dahanukarwadi, Kandivali West, offering thoughtfully planned 
        homes designed for modern urban living. The project focuses on 
        comfort, functionality, and connectivity, making it ideal for 
        families and working professionals.
    </p>

    

    <div className="row" style={{ marginTop: "15px" }}>
        <div className="col-lg-4">
            <strong>Bedrooms:</strong> 2
        </div>
        <div className="col-lg-4">
            <strong>Kitchen:</strong> 1
        </div>
        <div className="col-lg-4">
            <strong>Total Rooms:</strong> 5
        </div>
    </div>

    <div className="row" style={{ marginTop: "8px" }}>
        <div className="col-lg-4">
            <strong>Flooring:</strong> Vitrified Tiles
        </div>
        <div className="col-lg-4">
            <strong>Facing:</strong> East
        </div>
        <div className="col-lg-4">
            <strong>Possession:</strong> Ready to Move
        </div>
    </div>
</div>

                                <div className="fd-item fd-features">
    <h4>Features</h4>
    <div className="row">
        <div className="col-lg-4">
            <i className="fa fa-check"></i>
            <span>24x7 Security</span>
        </div>
        <div className="col-lg-4">
            <i className="fa fa-check"></i>
            <span>Power Backup</span>
        </div>
        <div className="col-lg-4">
            <i className="fa fa-check"></i>
            <span>Lift Facility</span>
        </div>
    </div>

    <div className="row">
        <div className="col-lg-4">
            <i className="fa fa-check"></i>
            <span>Reserved Parking</span>
        </div>
        <div className="col-lg-4">
            <i className="fa fa-check"></i>
            <span>Children’s Play Area</span>
        </div>
        <div className="col-lg-4">
            <i className="fa fa-check"></i>
            <span>Garden & Open Space</span>
        </div>
    </div>

    <div className="row">
        <div className="col-lg-4">
            <i className="fa fa-check"></i>
            <span>Water Supply</span>
        </div>
        <div className="col-lg-4">
            <i className="fa fa-check"></i>
            <span>Nearby Metro & Bus</span>
        </div>
        <div className="col-lg-4">
            <i className="fa fa-check"></i>
            <span>Vastu Compliant</span>
        </div>
    </div>
</div>

                                <div className="fd-item">
    <h4>Location</h4>
    <iframe
        src="https://www.google.com/maps?q=Arthaya,+Dahanukar+Wadi,+Kandivali+West,+Mumbai,+Maharashtra+400067&output=embed"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        title="Arthaya Kandivali West Location"
    ></iframe>
</div>


                            </div>
                            <div className="col-lg-4">
                                <div className="fd-sidebar-item">
<div className="fd-sidebar-item">
    <h4 style={{ marginBottom: "15px" }}>Quick Enquiry</h4>

    {/* WhatsApp Button */}
    <a
        href="https://wa.me/917039443733?text=Hello%20I%20am%20interested%20in%20Arthaya%20Homes"
        target="_blank"
        rel="noopener noreferrer"
        style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "16px",
            borderRadius: "12px",
            textDecoration: "none",
            color: "#fff",
            background: "linear-gradient(135deg, #25D366, #1ebe5d)",
            boxShadow: "0 10px 25px rgba(37,211,102,0.35)",
            marginBottom: "12px"
        }}
    >
        <i className="fab fa-whatsapp" style={{ fontSize: "26px" }}></i>
        <div>
            <strong>Chat on WhatsApp</strong>
            <p style={{ margin: 0, fontSize: "13px", opacity: 0.9 }}>
                Get instant project details
            </p>
        </div>
    </a>

    {/* Call Button */}
    <a
        href="tel:+917039443733"
        style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "16px",
            borderRadius: "12px",
            textDecoration: "none",
            color: "#fff",
            background: "linear-gradient(135deg, #0d6efd, #084298)",
            boxShadow: "0 10px 25px rgba(13,110,253,0.35)"
        }}
    >
        <i className="fas fa-phone-alt" style={{ fontSize: "22px" }}></i>
        <div>
            <strong>Call Now</strong>
            <p style={{ margin: 0, fontSize: "13px", opacity: 0.9 }}>
                Speak directly with agent
            </p>
        </div>
    </a>
</div>

</div>

                                <div className="fd-sidebar-item">
    <h4>Category</h4>
    <ul className="category-ul">
        <li>2 BHK Apartment</li>
        <li>Ready to Move</li>
        <li>Kandivali West</li>
        <li>Near Metro Station</li>
        <li>Family-Friendly Homes</li>
    </ul>
</div>

                                <div className="fd-sidebar-item">
                                    <h4>Recently Added</h4>
                                    <div className="recently-item">
                                        <img src="/img/sample11.png" alt="detail" width="50px" />
                                        <span>Atharva</span>
                                    </div>
                                    <div className="recently-item">
                                        <img src="/img/sample11.png" alt="detail" width="50px" />
                                        <span>Lodha</span>
                                    </div>
                                    <div className="recently-item">
                                        <img src="/img/sample12.png" alt="detail" width="50px" />
                                        <span>Navlai</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlatDetail