class Person < ApplicationRecord
  belongs_to :planet, optional: true
end
