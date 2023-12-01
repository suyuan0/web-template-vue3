interface Rule {
    required?: boolean
    pattern?: RegExp
    message: string
    trigger: 'blur' | 'change'
}

export type Rules = Record<string, Rule[]>

class FormValidator {
    static validate(formData: Record<string, string>, rules: Rules): string | null {
        for (const field in rules) {
            if (rules.hasOwnProperty(field)) {
                const fieldRules = rules[field]

                for (const rule of fieldRules) {
                    if (rule.required && (!formData[field] || formData[field].trim() === '')) {
                        return rule.message
                    }

                    if (rule.pattern && !rule.pattern.test(formData[field])) {
                        return rule.message
                    }
                }
            }
        }

        return null
    }
}

export default FormValidator
