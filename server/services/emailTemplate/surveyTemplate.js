// module.exports = survey => {
//   return '      <html>\n' +
//       '      <body>\n' +
//       '      <div style="text-align: center">\n' +
//       '          <h3>I\'d like your input!</h3>\n' +
//       '          <p> ${survey.body}</p>\n' +
//       '          <div>\n' +
//       '            <a href="${keys.redirectDomain}">Yes</a>\n' +
//       '          </div>\n' +
//       '          <div>\n' +
//       '            <a href="${keys.redirectDomain}">No</a>\n' +
//       '          </div>\n' +
//       '      </div>\n' +
//       '      </body>\n' +
//       '      </html>'
//
//     ;
// };


const keys = require('../../config/keys');

module.exports = survey => {
    return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>I'd like your input!</h3>
          <p>Please answer the following question:</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};