# Copyright (c) 2026, Tanvir Mahmud and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class WebsiteThemeColor(Document):
	def before_save(self):
		# If this document is marked as active
		if self.active:
			# Uncheck all other records
			frappe.db.sql("""
				UPDATE `tabWebsite Theme Color`
				SET active = 0
				WHERE name != %s
			""", self.name)
