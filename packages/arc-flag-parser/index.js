/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */
"use strict";

function peg$subclass(child, parent) {
  function ctor() {
    this.constructor = child;
  }

  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message = message;
  this.expected = expected;
  this.found = found;
  this.location = location;
  this.name = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function(expectation) {
      return '"' + literalEscape(expectation.text) + '"';
    },
    class: function(expectation) {
      var escapedParts = "",
        i;

      for (i = 0; i < expectation.parts.length; i++) {
        escapedParts +=
          expectation.parts[i] instanceof Array
            ? classEscape(expectation.parts[i][0]) +
              "-" +
              classEscape(expectation.parts[i][1])
            : classEscape(expectation.parts[i]);
      }

      return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
    },
    any: function() {
      return "any character";
    },
    end: function() {
      return "end of input";
    },
    other: function(expectation) {
      return expectation.description;
    }
  };

  function hex(ch) {
    return ch
      .charCodeAt(0)
      .toString(16)
      .toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/"/g, '\\"')
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g, function(ch) {
        return "\\x0" + hex(ch);
      })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
        return "\\x" + hex(ch);
      });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/\]/g, "\\]")
      .replace(/\^/g, "\\^")
      .replace(/-/g, "\\-")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g, function(ch) {
        return "\\x0" + hex(ch);
      })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
        return "\\x" + hex(ch);
      });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  return (
    "Expected " +
    (function(expected) {
      var descriptions = new Array(expected.length),
        i,
        j;

      for (i = 0; i < expected.length; i++) {
        descriptions[i] = describeExpectation(expected[i]);
      }

      descriptions.sort();

      if (descriptions.length > 0) {
        for (i = 1, j = 1; i < descriptions.length; i++) {
          if (descriptions[i - 1] !== descriptions[i]) {
            descriptions[j] = descriptions[i];
            j++;
          }
        }

        descriptions.length = j;
      }

      switch (descriptions.length) {
        case 1:
          return descriptions[0];

        case 2:
          return descriptions[0] + " or " + descriptions[1];

        default:
          return (
            descriptions.slice(0, -1).join(", ") +
            ", or " +
            descriptions[descriptions.length - 1]
          );
      }
    })(expected) +
    " but " +
    (function(found) {
      return found ? '"' + literalEscape(found) + '"' : "end of input";
    })(found) +
    " found."
  );
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},
    peg$startRuleFunctions = {
      Start: peg$parseStart
    },
    peg$startRuleFunction = peg$parseStart,
    peg$c0 = function(result) {
      if (!Array.isArray(result[0])) {
        result = [result];
      }

      return result;
    },
    peg$c1 = ",",
    peg$c2 = peg$literalExpectation(",", false),
    peg$c3 = function(head, tail) {
      return tail.reduce(function(result, element) {
        if (!Array.isArray(result[0])) {
          result = [result];
        }

        if (Array.isArray(element[1][0])) {
          result.push.apply(result, element[1]);
        } else {
          result.push(element[1]);
        }

        return result;
      }, head);
    },
    peg$c4 = "+",
    peg$c5 = peg$literalExpectation("+", false),
    peg$c6 = function(head, tail) {
      return tail.reduce(function(result, element) {
        if (Array.isArray(result[0])) {
          let next = [];
          element[1].forEach(flag => {
            result.forEach(r => next.push(r.concat(flag)));
          });
          return next;
        } else {
          return element[1].map(flag => {
            return result.concat(flag);
          });
        }
      }, head);
    },
    peg$c8 = peg$literalExpectation("[", false),
    peg$c10 = peg$literalExpectation("]", false),
    peg$c11 = function(expr) {
      return expr;
    },
    peg$c12 = /^[a-z_\-A-Z0-9]/,
    peg$c13 = (function(parts, inverted, ignoreCase) {
      return {
        type: "class",
        parts: parts,
        inverted: inverted,
        ignoreCase: ignoreCase
      };
    })([["a", "z"], "_", "-", ["A", "Z"], ["0", "9"]], false, false),
    peg$c14 = function() {
      return [text()];
    },
    peg$currPos = 0,
    peg$savedPos = 0,
    peg$posDetailsCache = [
      {
        line: 1,
        column: 1
      }
    ],
    peg$maxFailPos = 0,
    peg$maxFailExpected = [],
    peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error(
        "Can't start parsing from rule \"" + options.startRule + '".'
      );
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return {
      type: "literal",
      text: text,
      ignoreCase: ignoreCase
    };
  }

  function peg$endExpectation() {
    return {
      type: "end"
    };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos],
      p;

    if (details) {
      return details;
    } else {
      p = pos - 1;

      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
      endPosDetails = peg$computePosDetails(endPos);
    return {
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) {
      return;
    }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parseStart() {
    var s0, s1;
    s0 = peg$currPos;
    s1 = peg$parseExpression();

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c0(s1);
    }

    s0 = s1;
    return s0;
  }

  function peg$parseExpression() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$parseTerm();

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 44) {
        s4 = peg$c1;
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        peg$fail(peg$c2);
      }

      if (s4 !== peg$FAILED) {
        s5 = peg$parseTerm();

        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 44) {
          s4 = peg$c1;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          peg$fail(peg$c2);
        }

        if (s4 !== peg$FAILED) {
          s5 = peg$parseTerm();

          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c3(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseTerm() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$parseFactor();

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 43) {
        s4 = peg$c4;
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        peg$fail(peg$c5);
      }

      if (s4 !== peg$FAILED) {
        s5 = peg$parseFactor();

        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 43) {
          s4 = peg$c4;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          peg$fail(peg$c5);
        }

        if (s4 !== peg$FAILED) {
          s5 = peg$parseFactor();

          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c6(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseFactor() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 91) {
      s1 = "[";
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      peg$fail(peg$c8);
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parseExpression();

      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 93) {
          s3 = "]";
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          peg$fail(peg$c10);
        }

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c11(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$parseFlag();
    }

    return s0;
  }

  function peg$parseFlag() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = [];

    if (peg$c12.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      peg$fail(peg$c13);
    }

    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);

        if (peg$c12.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          peg$fail(peg$c13);
        }
      }
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c14();
    }

    s0 = s1;
    return s0;
  }

  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
};
