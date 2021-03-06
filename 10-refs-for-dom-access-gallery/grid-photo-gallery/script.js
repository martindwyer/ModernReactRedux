/**
 *
 * For reference see https://github.com/biati-digital/glightbox
 *
 */

const elements = [
  {
    href: "https://dm2306files.storage.live.com/y4mgcOx_M_mMD_8AMWjKxpX5o_OUQZlVNfKYnJKxrgUTyRexv5ywXILte31nsEPHodBPeIY0y9MLViF4EnWOXRT5M3jWvtc8nvag3O8yzhyXQm0mNGpMPYQHkCsF3vOBuswwDNN-MqVnz1IxNNW6oXqotkQmpk0lCTxB5vtA5lRknkM-7meoYRoO-cgw3ETrWMH?width=640&height=426&cropmode=none",
    type: "image",
    imageClass: "photo-0",
  },
  {
    href: "https://dm2306files.storage.live.com/y4mcLgYqE9Fy0I3mDgR-2uciJNygoZP5APgZt76BUZW9UGmXf6NVJem0rx7ittHh4UUVDoCkrF6Zbfz0jv4rloknUTlZKv4CvyPXmRAftOtfk2zAtvCr9NgyvCdNTdp3Ghkmgccn_I-BkQpBMhEnY1eODr3empntmPLB39ayUVTUMr9W2wPgp-0d3dLhwxnYigf?width=640&height=835&cropmode=none",
    type: "image",
    imageClass: "photo-1",
  },
  {
    href: "https://dm2306files.storage.live.com/y4mQyepEVlub5_vQBwji0tH5R7AnTWyaxg76GmVITmH919pWgWngjjs2QnqaiP8vnqcAO21STH0hujQ7qHlz0_-BVhA2wdCHDmIpfdZIVl-7spHvwCCukT4k-yM8usNnMmSKa3wHlrUSrUc-fREkcmLI9ZlSmRn8LralPJb1A08RFpxZNkQB5AmW4GMbsOxbwng?width=640&height=960&cropmode=none",
    type: "image",
    imageClass: "photo-2",
  },
  {
    href: "https://dm2306files.storage.live.com/y4mx_PGm-Hlj2H6QrGjFw-G1kZe1R28gRyvpFbibb1o3vvkmy_OUGHdyMGRWVzbX8CKdPTxgfQdZXWXx1kY04aBCVbl4EjLpQms_zZDE8KHwjX0lH2Du6AgBtljp3GBU3Z7OBLjAd2ZBhB31bzJG5z9p7RtVlv7ks6Xi_uXma-KhZHq4k0ROdCkJsIGllhYebcB?width=640&height=426&cropmode=none",
    type: "image",
    imageClass: "photo-3",
  },
  {
    href: "https://dm2306files.storage.live.com/y4m5mxERmcFPw46AMPm4167Zzqk6r00A9zcai2huglvJueq8nmHqBN6xmKjlqg4wEQO6JOnSbsBKY5cETfBODao-oHG1z1coB1ATQEC4sAPuzULwv5wivxT2Oqr2we4KDCH_1NBwbtjJI3_POg410nbSXI_0xajnXiifTCV02AphH0yq6SUuPD-4fQXRDEB3qV4?width=640&height=480&cropmode=none",
    type: "image",
    imageClass: "photo-4",
  },
  {
    href: "https://dm2306files.storage.live.com/y4mQSgw-_nzG_zAuS6YpjD0JSDXDnu1Mjzr_ap4QQgLP5bMyuBBP3r3xaj20-PGVgmPjeanmqHiK8lcLw0EUuC7n9uO1h1ojQHI-cZAxN-bKw1UaKgrVqGuxIE3JAT7GjSueEJfXqM3Ao_3vhZ1Cb7wQm4u-MY8VtssySiFuJvccMSm-BU_gbZqq3GMv2zdCgqV?width=640&height=959&cropmode=none",
    type: "image",
    imageClass: "photo-5",
  },
  {
    href: "https://dm2306files.storage.live.com/y4mu9fZqjnK8TTT51_WMMWwp1aBBZ69o1TuTdqkoe-w_0Q2S8ZTYMtYpRMZKJuFeJfGGpg7AQ6TWpmSc4OGiNBOhtSA3843523SOCdJcffl65zSAxGasR-uBRlDI6d5eDdVHMvB5k_xKRcTFiFKuP-WYnlEtB0eYB0kFqCqR3FlsKQral-gWcJAs4mdzvLyu2Vz?width=640&height=853&cropmode=none",
    type: "image",
    imageClass: "photo-6",
  },
  {
    href: "https://dm2306files.storage.live.com/y4mF77SODDr5rwOkcBL-oF4hVECVcZR67KVT9b-2yQv_iNokL1YZ5cG3LUEJPpyEtKsHUQV6pu7KVqJ_kNUhIQdln_Sq_7LeUg_7OFtYWaGNqcwmvoWanrqD7y7AB18BVdzyr6artVsm_4iQmZWyfE01s9sy00BNfxBKW6pAkmUSZGei-7qWqCBP7yFVjLDNeWv?width=640&height=425&cropmode=none",
    type: "image",
    imageClass: "photo-7",
  },
  {
    href: "https://dm2306files.storage.live.com/y4myN55qovLsGHV1r6SnLiNOIDTYxxip1Z4UhJ3WrFJhhverzPLdBV5SkxYPK_b2JNYJrafL11DEIFATnj4MvwTNkN9A70FtrP3q2k4vnGuv0ZbpITD41duM3hNhcl7p7gW0wB0WlOlYc1pJZwGwN6ojUTzbkVhXLAZBHcVc2BGspAnUpVUiDwq6WBG_sYfDWGj?width=640&height=426&cropmode=none",
    type: "image",
    imageClass: "photo-8",
  },
  {
    href: "https://dm2306files.storage.live.com/y4m1F2tJbr3FWdS-cVr1oNn-0KnRkv-_4XBqeUFza96ascWn5tTb425-MXlnKaUQGzPqQhmQzWFmNGYOmBZZPlsNnRoo_GNjDShVoB8n38jFE8ryd5aYIIFcKkg3PSppO6kIjmAVThSYmzZFi5Qk4qmDgptddTJ2Hv9LF7f4kkhOg8xSoA6ACKJbTgmrg3S0KNd?width=640&height=424&cropmode=none",
    type: "image",
    imageClass: "photo-9",
  },

  {
    href: "https://dm2306files.storage.live.com/y4micjUEfFftX6eGaf7ICJeDpZ_iQuV7P870T1AdXCU2RmqZzF1AXWZSK35OzgnSfmh5JSahrzqv7z6x6s6vex0jhn1RvLc_amm6SHFfwRrDPruYHTf5T2R3BSWTy4XHUIaR1Sq5FSpnAkjPpGSwEqGSxHPbdakXutr-Vvi_3CDnIpEWxoA9qpsdXO7E6DNvOgQ?width=640&height=426&cropmode=none",
    type: "image",
    imageClass: "photo-10",
  },
  {
    href: "https://dm2306files.storage.live.com/y4mDSdmvZL_eV9EuMVfYhAnevAiROz58LOvwgeYzGejyeAYJ8AB9iVIef1Wi_YEV8ACihSRAyi506W-rUH58bqEL7WIP2OUCh-FYaSj_drrqRFk5jDU5e8eOa6zaRQsb1l-bBhu5xeNTM_zNde2vZp906jS8SarE6DekC8EOJEqoNkE0hHEoyI5RcqLiuOtB8hV?width=5652&height=3727&cropmode=none",
    type: "image",
    imageClass: "photo-11",
  },
];

displayGallery = (evt) => {
  console.dir(evt.target);

  let srcClass = evt.srcElement.className;

  console.log(srcClass);

  let startingSlide = 0;

  startingSlide = Number.parseInt(srcClass.replace("photo-", ""));

  console.log(startingSlide);

  const myGallery = GLightbox({
    elements: elements,
    autoplayVideos: false,
    startAt: startingSlide,
    openEffect: "fade",
    closeEffect: "fade",
    zoomable: "true",
  });

  myGallery.on("close", () => {
    myGallery.close();
  });

  myGallery.open();
};

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", (evt) => {
    console.log(evt);
    displayGallery(evt);
  });
});
