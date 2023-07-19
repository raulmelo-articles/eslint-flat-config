/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem",
    fixable: "code",
    docs: {
      description: "Forbidden double underscore variable names.",
    },
  },
  create: function (context) {
    return {
      VariableDeclaration(node) {
        const currentVariableNode = node?.declarations[0] ?? null;

        if (
          currentVariableNode !== null &&
          currentVariableNode.id.name?.startsWith("__")
        ) {
          context.report({
            node,
            message: `Variable name cannot start with '__'.`,
            fix: function (fixer) {
              return fixer.replaceText(
                currentVariableNode.id,
                currentVariableNode.id.name.replace(/^__/, "")
              );
            },
          });
        }
      },
    };
  },
};
