module.exports = survey => {
  return '      <html>\n' +
      '      <body>\n' +
      '      <div style="text-align: center">\n' +
      '          <h3>I\'d like your input!</h3>\n' +
      '          <p> ${survey.body}</p>\n' +
      '          <div>\n' +
      '            <a href="${keys.redirectDomain}">Yes</a>\n' +
      '          </div>\n' +
      '          <div>\n' +
      '            <a href="${keys.redirectDomain}">No</a>\n' +
      '          </div>\n' +
      '      </div>\n' +
      '      </body>\n' +
      '      </html>'

    ;
};