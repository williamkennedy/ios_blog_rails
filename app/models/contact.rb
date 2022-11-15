class Contact < ApplicationRecord
  after_create_commit { broadcast_append_to :contacts, target: :contacts }
end
