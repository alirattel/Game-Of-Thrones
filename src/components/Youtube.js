import React from "react";
import PropTypes from "prop-types";

const Youtube = ({ embedId }) => (
    <section className="youtube">
        <h2 className="GOT">Watch the Official  Trailer :</h2>
        <div className="video-responsive">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    </section>
);

Youtube.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default Youtube;