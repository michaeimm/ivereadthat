// ==UserScript==
// @name        ivereadthat
// @include     http*://www.facebook.com/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @grant       none
// ==/UserScript==

console.log('This script grants no special privileges, so it runs without security limitations.');
MutationObserver = window.MutationObserver || window.WebKitMutationObserver
var observer = new MutationObserver(function(mutations, observer) {
    jQuery(".UFILikeLink").each(function() {
        if(this.dataset.ft == '{"tn":">"}') {
            $(this).html("朕知道了")
        }
        else if(this.dataset.ft == '{"tn":"?"}') {
            $(this).html("朕也是看報紙才知道")
        }
    })
    jQuery(".comment_link > span").each(function() {
		$(this).text("卿家可知？")
    })
    jQuery(".share_action_link").each(function() {
        if ($(this).text() == "Share" || $(this).text() == "分享") {
            $(this).text("宣旨")
        }
    })
})

observer.observe(document, {
    subtree: true,
    attributes: true
})
