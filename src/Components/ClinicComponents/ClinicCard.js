import React from "react";

const ClinicCard = ({
  clinicName,
  clinicImage,
  clinicDescription,
  clinicEmail,
}) => {
  const DEFAULT_IMAGE = "https://www.acresmillvet.com/storage/app/media/4t.jpg";

  return (
    <div class="card" style={{ margin: "10px" }}>
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src={clinicImage ? clinicImage : DEFAULT_IMAGE}
            alt={clinicName + " image"}
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                src={clinicImage ? clinicImage : DEFAULT_IMAGE}
                alt={clinicName + " image"}
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{clinicName}</p>
            <p class="subtitle is-6">{clinicEmail}</p>
          </div>
        </div>

        <div class="content">
          {clinicDescription ? clinicDescription : "Description"}
          <br />
          <a>@bulmaio</a>.<a href="#">#css</a> <a href="#">#responsive</a>
          <br />
          {/* <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
        </div>
      </div>
    </div>
  );
};

export default ClinicCard;
