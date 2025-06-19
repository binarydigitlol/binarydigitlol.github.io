export default (() => {
  function Status() {
    // return <p><h3>Current Status:</h3><div id="statuscafe"><div id="statuscafe-username"></div><div id="statuscafe-content"><script src="https://status.cafe/current-status.js?name=lizbytes" defer></script></div>
    // </div>
    // </p>    
    return <p><script src="https://status.lol/binarydigit.js?time&pretty&fluent"></script></p>
  }

  return Status
}) satisfies QuartzComponentConstructor