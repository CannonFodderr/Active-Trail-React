(function () {
    var _atpopq = window._atpopq || (window._atpopq = []);
    window._atpopobj = {};
    if (!_atpopq.loaded) {
        var v = Math.floor((Math.random() * 1000000) + 1);
        var atpopjs = document.createElement('script');
        atpopjs.type = 'text/javascript';
        atpopjs.async = true;
        atpopjs.src = 'https://cdn-media.web-view.net/popups/lib/v1/loader.min.js?v=' + v;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(atpopjs, s);
        _atpopq.loaded = true;
    }
    _atpopq.push(['UserId', 'dxapsu']);
    _atpopq.push(['PopupId', 'ewafwcu2']);
    _atpopq.push(['IsraelCode', '104']);
    _atpopq.push(['CountryCode', '104']);
    _atpopq.push(['IsEmbed', true]);
    _atpopq.push(['IgnoreMainCss', true]);
    _atpopq.push(['OnEventCallback', 'handleATPopupEvent']);
})();

function handleATPopupEvent(ev,args){
    switch(ev){
        case 'display':
        //Do this when the popup is displayed
        break;
        case 'close':
        //Do this when the popup gets closed by the user
        break;
        case 'submit':
        //Do this when popup gets submitted and the user doesn't get redirected to a URL
        break;
    }
}