export const refreshIframe = () => () => {
    // Refresh Iframe When Save.
    let iframe = document.getElementsByClassName('iframe-site');
    iframe[0].src = iframe[0].src; // Reload it.
}